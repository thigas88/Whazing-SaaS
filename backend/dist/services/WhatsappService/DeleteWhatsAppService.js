'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x191)) / (-0x833 + 0x1bf9 + -0x13c5) + -parseInt(q(0x19e)) / (-0x1e68 + -0x2147 + 0x3fb1) * (parseInt(p(0x1a6)) / (-0x149d + -0x1b67 + -0x5 * -0x99b)) + -parseInt(q(0x1a9)) / (0x199 * 0x6 + -0x21a6 + 0x1814) * (-parseInt(q(0x1a8)) / (0x1 * -0x1e2f + 0x1 * 0x1225 + -0x7 * -0x1b9)) + parseInt(q(0x1a7)) / (0x1fd + 0x2504 + -0x26fb) * (-parseInt(p(0x190)) / (-0xd38 + 0x3 * 0x562 + -0x2e7)) + parseInt(q(0x19b)) / (0x9 * -0x3e5 + -0x3 * 0x916 + 0x3e57 * 0x1) + -parseInt(p(0x1ab)) / (-0x160f + 0x1340 * -0x1 + 0x8 * 0x52b) + -parseInt(p(0x19d)) / (-0x1 * -0xae1 + -0x19b * 0x12 + 0x120f) * (-parseInt(q(0x1aa)) / (-0x711 * -0x2 + -0x1ce9 + 0xed2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2386 * -0x55 + 0xa25f7 + -0x7 * 0x21a05));
var __importDefault = this && this[r(0x193) + s(0x19c)] || function (c) {
    const t = r;
    return c && c[t(0x196)] ? c : { 'default': c };
};
const k = {};
function a() {
    const w = [
        'update',
        '70XCEdLS',
        '704771RhXLhG',
        'isDeleted',
        '__importDe',
        'defineProp',
        'tenantId',
        '__esModule',
        'rs/AppErro',
        'status',
        '../../erro',
        'erty',
        '2490160gVCZKp',
        'fault',
        '188820URFThj',
        '199858vSoZqy',
        'value',
        'where',
        'findOne',
        'TaKDE',
        'P_FOUND',
        'ozHEK',
        'ERR_NO_WAP',
        '12mXnNsf',
        '433308UMzXOS',
        '2002925yxKeOG',
        '4aGSPqR',
        '1188BzuBAw',
        '4054554iXzgqG',
        'ls/Whatsap',
        'DISCONNECT',
        'default',
        '../../mode'
    ];
    a = function () {
        return w;
    };
    return a();
}
k[r(0x19f)] = !![], Object[r(0x194) + s(0x19a)](exports, r(0x196), k);
const Whatsapp_1 = __importDefault(require(s(0x18e) + s(0x1ac) + 'p')), AppError_1 = __importDefault(require(s(0x199) + r(0x197) + 'r')), DeleteWhatsApprService = async (g, h) => {
        const u = s, v = s, i = {};
        i[u(0x1a2)] = u(0x1a5) + v(0x1a3), i[u(0x1a4)] = v(0x18c) + 'ED';
        const j = i, l = {};
        l['id'] = g, l[v(0x195)] = h;
        const m = {};
        m[u(0x1a0)] = l;
        const n = await Whatsapp_1[u(0x18d)][u(0x1a1)](m);
        if (!n)
            throw new AppError_1[(v(0x18d))](j[v(0x1a2)], 0xa1d * 0x1 + -0x79 + -0x2b * 0x30);
        const o = {};
        o[v(0x192)] = !![], o[u(0x198)] = j[u(0x1a4)], await n[u(0x18f)](o);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x11 * 0x2 + -0x3fd * -0x9 + -0x2237 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[s(0x18d)] = DeleteWhatsApprService;