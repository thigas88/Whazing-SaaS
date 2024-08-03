const s = b, v = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const g = -parseInt(q(0xf2)) / (0xe * 0x18a + 0xc13 * -0x3 + 0xeae) * (parseInt(q(0x10a)) / (0x34 * -0x92 + 0x28d * -0x7 + 0x2f85)) + -parseInt(q(0xfd)) / (0xbfe + 0x3 * -0x185 + 0x2 * -0x3b6) + -parseInt(r(0x109)) / (0xb8 * 0xc + 0x4 * 0x63d + 0x2190 * -0x1) + -parseInt(q(0x104)) / (-0x25 * 0x17 + 0x7 * -0xea + 0x9be) + -parseInt(r(0x105)) / (-0x9d * -0x1d + 0x168f * 0x1 + -0x2852) * (-parseInt(q(0x102)) / (0xba1 + -0x1721 + 0xb87)) + -parseInt(r(0xf9)) / (0xc4 * -0x13 + 0xf29 + 0x95 * -0x1) * (parseInt(r(0x107)) / (0xc89 + -0x24bb + -0x1 * -0x183b)) + parseInt(r(0xff)) / (0x19 * 0x65 + -0x16 * -0x16c + -0x291b) * (parseInt(q(0xf7)) / (-0x19c + -0x642 + 0xe1 * 0x9));
            if (g === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0xc710b + -0x483c0 + -0x11 * -0x222d));
const axios = require(s(0x103));
function a() {
    const w = [
        'FhOIk',
        '2920446BKTFKH',
        'post',
        '26638150nxTvRE',
        'USUARIO_AP',
        'SENHA_API',
        '14vqVzZy',
        'axios',
        '2891510pGWiAd',
        '2446530iBOYUd',
        'env',
        '45tuJGiD',
        'status',
        '155252mWCsVB',
        '4eBqIaK',
        'exports',
        'error',
        'json',
        '504418Jpfwbs',
        'body',
        'data',
        'tenticação',
        'autenticar',
        '11lObBfp',
        'Erro\x20na\x20au',
        '338656UxGvhB',
        'username',
        'password'
    ];
    a = function () {
        return w;
    };
    return a();
}
async function autenticar(g, h) {
    const t = s, u = s, i = {};
    i[t(0xfc)] = t(0xf8) + t(0xf5);
    const j = i, {
            username: k,
            password: l
        } = g[u(0xf3)];
    try {
        const m = {};
        m[t(0xfa)] = process[u(0x106)][u(0x100) + 'I'], m[t(0xfb)] = process[t(0x106)][t(0x101)];
        const n = await axios[t(0xfe)](m);
        h[t(0xf1)](n[u(0xf4)]);
    } catch (o) {
        const p = {};
        p[u(0xf0)] = j[t(0xfc)], h[u(0x108)](0x18 * 0x62 + 0x60d * -0x1 + -0x12f)[t(0xf1)](p);
    }
}
const f = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x20e0 + -0xb9 * 0x11 + 0x9d4 * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
f[s(0xf6)] = autenticar, module[v(0xef)] = f;