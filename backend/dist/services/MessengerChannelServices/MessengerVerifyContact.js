'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x13f)) / (-0xfa5 + -0x1f28 + -0x1767 * -0x2) + -parseInt(q(0x130)) / (-0x15 * -0x13 + 0xd45 * -0x1 + 0x258 * 0x5) * (-parseInt(r(0x144)) / (-0x1eba + 0x2c * 0x90 + 0x5fd)) + -parseInt(q(0x14d)) / (0x2 * 0x152 + -0x2a5 * 0x2 + 0x2aa * 0x1) + parseInt(q(0x12b)) / (-0x1a90 + 0x1aba + -0x25) + parseInt(q(0x129)) / (-0x16f8 + -0x119 * -0xe + -0x7a0 * -0x1) + -parseInt(r(0x146)) / (0x251 * 0xe + -0x211 + -0x1e56) + -parseInt(q(0x13a)) / (-0x1283 + -0x1 * -0x65b + 0xc3 * 0x10) * (parseInt(q(0x136)) / (-0x497 + 0x9 * 0x129 + -0x1 * 0x5d1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x197 * -0x62e + -0xdb4af + 0x115067));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x75 * 0x51 + 0x263b + -0x4a18);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0x134) + t(0x138)] || function (c) {
    const u = t;
    return c && c[u(0x141)] ? c : { 'default': c };
};
const k = {};
k[s(0x12c)] = !![], Object[s(0x132) + s(0x143)](exports, s(0x141), k);
function a() {
    const x = [
        'erty',
        '1281QpHWoR',
        'messenger',
        '5773390AzQqTS',
        'Service',
        'lastName',
        'profilePic',
        'messengerI',
        'Url',
        'isUser',
        '656964FSfePA',
        'firstName',
        '8222664cuCxnR',
        'isWAContac',
        '7182185XqBadK',
        'value',
        'reateOrUpd',
        'origem',
        'name',
        '7846aGmKMC',
        'isGroup',
        'defineProp',
        'number',
        '__importDe',
        'tenantId',
        '9cXmeKf',
        'ateContact',
        'fault',
        'tureUrl',
        '14825072dpJgrf',
        'pushname',
        'default',
        'getPersona',
        '../Contact',
        '759511OTrgdB',
        'iEhek',
        '__esModule',
        'Services/C'
    ];
    a = function () {
        return x;
    };
    return a();
}
const CreateOrUpdateContactService_1 = __importDefault(require(t(0x13e) + s(0x142) + t(0x12d) + s(0x137) + t(0x147))), MessengerVerifyContact = async (e, f, g) => {
        const v = t, w = t, h = {};
        h[v(0x140)] = w(0x145);
        const i = h, j = await f[w(0x13d)](e['id']), l = j?.[v(0x149) + w(0x139)] || j?.[w(0x149)] || undefined, m = j[w(0x12f)] || j[w(0x128)] + '\x20' + j[v(0x148)] || '', n = {};
        n[v(0x12f)] = m, n[v(0x133)] = j['id'], n[w(0x14a) + 'd'] = j['id'], n[w(0x149) + v(0x14b)] = l, n[w(0x135)] = g, n[v(0x13b)] = m, n[v(0x14c)] = ![], n[w(0x12a) + 't'] = !![], n[v(0x131)] = ![], n[v(0x12e)] = i[w(0x140)];
        const o = n, p = await (0x1c55 + 0x2fa * 0x8 + -0x3425, CreateOrUpdateContactService_1[w(0x13c)])(o);
        return p;
    };
exports[t(0x13c)] = MessengerVerifyContact;