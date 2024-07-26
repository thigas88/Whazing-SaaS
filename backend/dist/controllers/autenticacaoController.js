function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xc1 * -0x20 + -0x3d * -0x36 + 0xbd6);
        let h = e[f];
        return h;
    }, b(c, d);
}
const s = b, v = b;
function a() {
    const w = [
        '129460ThkeHE',
        'username',
        '8582814fMcZyc',
        '145hUWOdf',
        'data',
        'json',
        '62itaQfP',
        '43487697PdGgXH',
        'post',
        'Erro\x20na\x20au',
        'exports',
        'autenticar',
        '519vAvFGO',
        '4597397TJtqwC',
        'error',
        'status',
        'KVjco',
        'tenticação',
        '477dbStVg',
        '7864rcZywj',
        'body',
        'USUARIO_AP',
        '10llYGTF',
        'axios',
        'SENHA_API',
        'env',
        'password',
        '187659EIKuqF'
    ];
    a = function () {
        return w;
    };
    return a();
}
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const g = -parseInt(q(0x94)) / (-0xd12 + 0x8c1 + 0x2 * 0x229) + parseInt(r(0x9b)) / (-0x2042 + -0x217e + 0x41c2) * (parseInt(r(0xa1)) / (-0x1 * 0x1529 + -0x2 * 0x2b0 + -0x1a8c * -0x1)) + -parseInt(r(0x95)) / (-0x1 * -0xad2 + -0x10 * -0xb3 + 0x2 * -0xaff) * (parseInt(q(0x98)) / (-0x1 * -0x1aaf + 0x25ac + -0x9 * 0x726)) + -parseInt(q(0x97)) / (0x268e + -0x8e3 + -0x1da5) + -parseInt(q(0xa2)) / (0x1d75 + 0x17c + 0xf75 * -0x2) + -parseInt(q(0xa8)) / (-0x861 + -0xdb5 + 0x161e) * (-parseInt(q(0xa7)) / (-0x830 + 0x2359 + -0x1b20)) + -parseInt(r(0xab)) / (-0x1d7a * -0x1 + 0x4 * -0x3 + -0x1d64) * (-parseInt(r(0x9c)) / (0x2142 + 0x53 * -0x45 + -0xad8));
            if (g === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0xdda62 + 0x64024 + -0x7efa9 * 0x1));
const axios = require(s(0xac));
async function autenticar(g, h) {
    const t = s, u = s, i = {};
    i[t(0xa5)] = u(0x9e) + u(0xa6);
    const j = i, {
            username: k,
            password: l
        } = g[t(0xa9)];
    try {
        const m = {};
        m[u(0x96)] = process[u(0xae)][u(0xaa) + 'I'], m[u(0xaf)] = process[u(0xae)][t(0xad)];
        const n = await axios[u(0x9d)](m);
        h[u(0x9a)](n[t(0x99)]);
    } catch (o) {
        const p = {};
        p[u(0xa3)] = j[t(0xa5)], h[u(0xa4)](0x133 * -0x11 + -0xff7 * -0x2 + -0x5 * 0x1eb)[u(0x9a)](p);
    }
}
const f = {};
f[v(0xa0)] = autenticar, module[v(0x9f)] = f;