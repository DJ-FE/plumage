/**
 * Created by zhengzk on 2017/7/20.
 */
const fs = require('fs')
const path = require('path')
const zlib = require('zlib')
const rollup = require('rollup')
const uglify = require('uglify-js')

if (!fs.existsSync('dist/js')) {
    fs.mkdirSync('dist/s')
}

let builds = require('./config').getAllBuilds()

// filter builds via command line arg
if (process.argv[2]) {
    const filters = process.argv[2].split(',')
    builds = builds.filter(b => {
        return filters.some(f => b.output.indexOf(f) > -1)
    })
}
build(builds)

function build(builds) {
    let built = 0
    const total = builds.length
    const next = () =>{
        buildEntry(builds[built]).then(() => {
            built ++
            if (built < total){
            next()
        }
    }).catch(logError)
    }

    next()
}

function buildEntry(config) {
    const isProd = /min\.js$/.test(config.output)
    return rollup.rollup(config)
            .then(bundle => bundle.generate(config)
).then(({code}) => {
        if (isProd) {
            var minified = (config.banner ? config.banner + '\n' : '') + uglify.minify(code, {
                    output: {
                        ascii_only: true
                    },
                    compress: {
                        pure_funcs: ['makeMap']
                    }
                }).code
            return write(config.output, minified, true)
        } else {
            return write(config.output, code)
        }
    }
)
}

function write(output, code, zip) {
    return new Promise((resolve, reject) => {
      function report(extra) {
        console.log(blue(path.relative(process.cwd(), output)) + ' ' + getSize(code) + (extra || ''))
        resolve()
      }

    fs.writeFile(output, code, err => {
        if (err) return reject(err)
        if (zip) {
            zlib.gzip(code, (err, zipped) => {
                if (err) return reject(err)
                report(' (gzipped: ' +getSize(zipped) + ')'
        )
        })
        } else {
            report()
        }
    }
)
})
}

function getSize(code) {
    return (code.length / 1024).toFixed(2) + 'kb'
}

function logError(e) {
    console.log(e)
}

function blue(str) {
    return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}
