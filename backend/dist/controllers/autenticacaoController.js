function a() {
    const w = [
        '48UxXTqK',
        'env',
        '108560VCtNtm',
        'USUARIO_AP',
        '4396655EzvpbW',
        '4KRzYEu',
        'tenticação',
        'username',
        'autenticar',
        'password',
        'iFacU',
        '1661ViZUNE',
        'post',
        '302779nUsKjL',
        'axios',
        '70tYGxft',
        'json',
        '954306FCLrnf',
        '2706319aFhqBn',
        'Erro\x20na\x20au',
        'exports',
        'error',
        'data',
        'status',
        '2304492IRCkGS',
        'body',
        'SENHA_API',
        '80391OMpzRk'
    ];
    a = function () {
        return w;
    };
    return a();
}
const s = b, v = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const g = -parseInt(q(0x113)) / (0x1317 + 0xaf1 * -0x3 + 0xdbd) + parseInt(q(0x115)) / (0x16a2 * 0x1 + 0x3df * -0x6 + 0x4d * 0x2) * (-parseInt(r(0x105)) / (0x1 * 0xca7 + 0x21a9 + 0x1 * -0x2e4d)) + parseInt(q(0x10b)) / (-0x4fb + -0xe10 + -0x29 * -0x77) * (parseInt(q(0x10a)) / (0x20e9 * -0x1 + -0x12f1 + 0x7 * 0x769)) + -parseInt(r(0x102)) / (0x113 * -0x16 + -0xac1 * 0x1 + 0x2269) + parseInt(r(0x118)) / (0x3 * 0x7ff + 0x1 * -0x1fb2 + 0x7bc) + -parseInt(q(0x106)) / (0x1cc * 0xa + 0x1b84 + 0x1 * -0x2d74) * (parseInt(q(0x117)) / (-0x2 * 0xe89 + -0x141 * 0x19 + 0x3c74)) + parseInt(q(0x108)) / (-0x1f * -0x5b + 0x1ab7 + -0x5 * 0x78a) * (parseInt(q(0x111)) / (0x889 + -0x1 * 0x24ee + 0x1 * 0x1c70));
            if (g === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8a5f2 + 0x42196 + 0x13 * -0x27bc));
const axios = require(s(0x114));
async function autenticar(g, h) {
    const t = s, u = s, i = {};
    i[t(0x110)] = u(0x119) + u(0x10c);
    const j = i, {
            username: k,
            password: l
        } = g[u(0x103)];
    try {
        const m = {};
        m[u(0x10d)] = process[u(0x107)][t(0x109) + 'I'], m[u(0x10f)] = process[t(0x107)][u(0x104)];
        const n = await axios[u(0x112)](m);
        h[u(0x116)](n[t(0x100)]);
    } catch (o) {
        const p = {};
        p[u(0xff)] = j[t(0x110)], h[t(0x101)](-0x20ca + -0xb47 + 0x2e05)[t(0x116)](p);
    }
}
const f = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1f0e + 0x1 * -0x16db + -0x734);
        let h = e[f];
        return h;
    }, b(c, d);
}
f[s(0x10e)] = autenticar, module[v(0x11a)] = f;