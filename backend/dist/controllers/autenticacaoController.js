function a() {
    const w = [
        'status',
        '9085503mzVMre',
        'env',
        '14416660yzIynf',
        '41636ihTdeY',
        '1688127HMBgND',
        'SENHA_API',
        'exports',
        'username',
        'USUARIO_AP',
        '62lrPlsc',
        'tenticação',
        'Erro\x20na\x20au',
        'json',
        '10tvbegk',
        '2038596vJuEeK',
        'vPwaw',
        '2594468vIraOE',
        'data',
        'password',
        'error',
        'axios',
        'body',
        '10030869kbFlYY',
        'post',
        'autenticar',
        '8OXZOCd'
    ];
    a = function () {
        return w;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2157 + -0xba1 + 0x2d7c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const s = b, v = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const g = -parseInt(q(0x8b)) / (-0x2 * -0x77d + 0x1d9e + -0xf * 0x2f9) * (-parseInt(q(0x85)) / (-0x10d0 + 0xd0f + 0x3 * 0x141)) + -parseInt(q(0x86)) / (0x168f + -0xf9 * -0xe + 0x1 * -0x242a) + parseInt(q(0x92)) / (0x756 * -0x2 + 0x1a2a + -0xb7a) * (parseInt(q(0x8f)) / (-0x31 * 0x9f + 0xef * 0x1f + 0x3 * 0x81)) + parseInt(q(0x90)) / (0x176 * -0x9 + -0x46 + 0x6b9 * 0x2) + -parseInt(q(0x9d)) / (-0x6de + 0x12aa * 0x1 + -0x83 * 0x17) + parseInt(r(0x9b)) / (0x9d3 + 0x1a74 + -0x1 * 0x243f) * (parseInt(r(0x98)) / (-0x10bc + 0x1004 + 0xc1)) + -parseInt(q(0x84)) / (0x5ad + -0x1b08 + -0x1565 * -0x1);
            if (g === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x9db54 + 0xd21be + -0x256ed * 0x5));
const axios = require(s(0x96));
async function autenticar(g, h) {
    const t = s, u = s, i = {};
    i[t(0x91)] = t(0x8d) + t(0x8c);
    const j = i, {
            username: k,
            password: l
        } = g[t(0x97)];
    try {
        const m = {};
        m[t(0x89)] = process[t(0x9e)][t(0x8a) + 'I'], m[t(0x94)] = process[u(0x9e)][t(0x87)];
        const n = await axios[t(0x99)](m);
        h[t(0x8e)](n[u(0x93)]);
    } catch (o) {
        const p = {};
        p[t(0x95)] = j[t(0x91)], h[t(0x9c)](0x23e3 + -0xbc * -0xe + -0x4d * 0x93)[t(0x8e)](p);
    }
}
const f = {};
f[v(0x9a)] = autenticar, module[v(0x88)] = f;