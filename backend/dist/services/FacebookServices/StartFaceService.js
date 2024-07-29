'use strict';
const p = b, q = b;
function a() {
    const y = [
        'StartFaceS',
        'xVtkf',
        'aW5mb21ldX',
        'response',
        'YSrxQ',
        '125964SqSRRp',
        'findOne',
        '9vaw==',
        'axios',
        'status',
        'enabled',
        'ls/Setting',
        '1089618yNPcDG',
        'update',
        'HTNlc',
        'Warning',
        'tenantId',
        'erty',
        '4857600pxCRwB',
        'rhpfk',
        'aHR0cHM6Ly',
        'env',
        '92YWxpZGEu',
        'RBlnc',
        'userCreati',
        'ervice',
        'base64',
        '969enDulJ',
        'CNbgA',
        'where',
        'YnIvd2ViaG',
        '4192995hePyKP',
        'Unauthoriz',
        'BAwhG',
        'toString',
        'defineProp',
        '__importDe',
        '7DkVjVv',
        'Jlci5jb20u',
        'aJPsQ',
        'value',
        '3304040FRpCOL',
        'wTMcu',
        'utf-8',
        'default',
        '1796PgKyFX',
        'from',
        'post',
        '__esModule',
        '666632fZkokS',
        'fault',
        'bkVJe',
        'BACKEND_UR',
        'hSxiy',
        '710jBkCvu',
        'warn',
        'key',
        '../../mode',
        'disabled'
    ];
    a = function () {
        return y;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xbb7 * 0x3 + -0x1 * -0x1ca3 + 0x3ea5 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x12c)) / (0x22be + 0x226c + 0x5 * -0xdd5) + -parseInt(o(0x142)) / (0x1 * -0x232 + 0x1 * 0x1002 + -0xdce) + parseInt(n(0x151)) / (0x1f8b + -0x5 * -0x15d + 0x2659 * -0x1) * (parseInt(o(0x128)) / (0x2 * 0xb3b + -0xe23 + 0x84f * -0x1)) + parseInt(n(0x155)) / (0xa25 + 0x97 * 0x41 + -0x3077) + parseInt(n(0x148)) / (0x104e * 0x1 + 0x51b * -0x7 + 0x1375) + -parseInt(o(0x15b)) / (-0xf96 + -0x255 * 0x7 + 0x38 * 0x92) * (parseInt(n(0x124)) / (0x1257 + -0x818 + -0xa37)) + parseInt(n(0x13b)) / (0xfb * 0x8 + -0xc1 + -0x6 * 0x12d) * (-parseInt(n(0x131)) / (-0x21eb + -0x8bf * 0x1 + 0x2ab4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x92661 + -0xf2e1 + 0x11daea));
var __importDefault = this && this[p(0x15a) + p(0x12d)] || function (c) {
    const r = q;
    return c && c[r(0x12b)] ? c : { 'default': c };
};
const k = {};
k[p(0x123)] = !![], Object[p(0x159) + p(0x147)](exports, q(0x12b), k), exports[p(0x136) + p(0x14f)] = void (0x59f + -0x23b2 + 0x1e13 * 0x1);
const axios_1 = __importDefault(require(q(0x13e))), Setting_1 = __importDefault(require(p(0x134) + p(0x141))), decodeBase64 = c => Buffer[q(0x129)](c, q(0x150))[q(0x158)](q(0x126)), StartFaceService = async () => {
        const s = p, t = p, c = {
                'bkVJe': function (f, g) {
                    return f(g);
                },
                'HTNlc': s(0x14a) + t(0x14c) + s(0x138) + s(0x15c) + s(0x154) + s(0x13d),
                'YSrxQ': function (f, g) {
                    return f === g;
                },
                'rhpfk': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'BAwhG': s(0x14e) + 'on',
                'CNbgA': t(0x135),
                'aJPsQ': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'wTMcu': s(0x140),
                'xVtkf': t(0x156) + 'ed',
                'RBlnc': t(0x145),
                'hSxiy': function (f) {
                    return f();
                }
            };
        async function d() {
            const u = s, v = t;
            try {
                const f = c[u(0x12e)](decodeBase64, c[v(0x144)]), g = {};
                g['6'] = process[v(0x14b)][u(0x12f) + 'L'];
                const h = g, i = await axios_1[v(0x127)][u(0x12a)](f, h);
                c[v(0x13a)](i[u(0x13f)], 0x1 * -0x2029 + 0x1 * 0x100f + 0x10e2) ? await c[v(0x149)](e, '1', c[u(0x157)], c[u(0x152)]) : await c[u(0x15d)](e, '1', c[v(0x157)], c[u(0x125)]);
            } catch (j) {
                await c[v(0x149)](e, '1', c[v(0x157)], c[v(0x125)]);
                if (j[u(0x139)] && c[u(0x13a)](j[v(0x139)][u(0x13f)], -0xcfe + -0x411 * 0x3 + 0xa * 0x2ad))
                    throw new Error(c[v(0x137)]);
                else
                    console[u(0x132)](c[v(0x14d)]);
            }
        }
        async function e(f, g, h) {
            const w = s, x = s, i = {};
            i[w(0x133)] = g, i[w(0x146)] = f;
            const j = {};
            j[w(0x153)] = i;
            const l = await Setting_1[w(0x127)][w(0x13c)](j), m = {};
            return m[w(0x123)] = h, await l[w(0x143)](m), l;
        }
        await c[s(0x130)](d);
    };
exports[q(0x136) + p(0x14f)] = StartFaceService;