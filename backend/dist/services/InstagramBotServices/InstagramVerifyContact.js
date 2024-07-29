'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1138 * 0x2 + 0x9 * -0x361 + 0x4240);
        let h = e[f];
        return h;
    }, b(c, d);
}
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x16c)) / (0x257d + -0x1c2e * 0x1 + 0x4a7 * -0x2) * (parseInt(o(0x17f)) / (-0x85e + -0x477 * -0x1 + -0xd * -0x4d)) + parseInt(o(0x170)) / (-0x2382 + -0x1 * 0x265a + 0x49df) + parseInt(n(0x16e)) / (0x6cd * 0x2 + -0x12a4 + 0x50e) + -parseInt(o(0x175)) / (0x49 * -0x9 + -0x5e3 * -0x1 + -0x34d) + parseInt(n(0x171)) / (-0x1 * -0x574 + -0x166 * -0x8 + 0x84f * -0x2) + parseInt(o(0x183)) / (0x65f * 0x1 + 0x17 * -0xdf + 0x1 * 0xdb1) * (-parseInt(o(0x168)) / (0x801 * 0x1 + 0xa0 + -0x899)) + parseInt(o(0x17c)) / (-0x6a4 + 0xa4a + -0xb9 * 0x5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1b6b62 + -0xacaf3 + -0x24bfb));
var __importDefault = this && this[p(0x16d) + q(0x179)] || function (c) {
    const r = p;
    return c && c[r(0x16f)] ? c : { 'default': c };
};
const k = {};
k[q(0x173)] = !![], Object[q(0x17a) + q(0x180)](exports, q(0x16f), k);
function a() {
    const u = [
        'users',
        'ateContact',
        'reateOrUpd',
        'fault',
        'defineProp',
        'Service',
        '15782184ZCuHmo',
        'profile_pi',
        'lBuqi',
        '766028BDNfVv',
        'erty',
        'thread',
        'full_name',
        '3745VcCRaA',
        'Services/C',
        '../Contact',
        '20488epgcgQ',
        'default',
        'pDKLD',
        'c_url',
        '1Kvrsmp',
        '__importDe',
        '489172bKVgQk',
        '__esModule',
        '4325973sRZXnJ',
        '1416264fjJqKU',
        'username',
        'value',
        'instagram',
        '8138295tWNlYy'
    ];
    a = function () {
        return u;
    };
    return a();
}
const CreateOrUpdateContactService_1 = __importDefault(require(p(0x167) + q(0x184) + q(0x178) + q(0x177) + q(0x17b))), InstagramVerifyContact = async (c, d, e) => {
        const s = p, t = q, f = {
                'pDKLD': function (l, m) {
                    return l(m);
                },
                'lBuqi': s(0x174)
            };
        let g, h;
        try {
            h = c[t(0x181)]?.[s(0x176)][0x160 * 0x10 + 0x2 * 0xb2 + -0x2 * 0xbb2], g = h[s(0x17d) + t(0x16b)];
        } catch (l) {
            g = undefined;
        }
        const i = {
                'name': h?.[t(0x182)] || h[s(0x172)] || '',
                'number': '',
                'profilePicUrl': g ? f[s(0x16a)](String, g) : undefined,
                'tenantId': e,
                'pushname': h[t(0x172)] || '',
                'isUser': !![],
                'isWAContact': ![],
                'isGroup': ![],
                'origem': f[s(0x17e)],
                'instagramPK': h['pk']
            }, j = await (-0x1190 + 0xc53 + 0x53d, CreateOrUpdateContactService_1[t(0x169)])(i);
        return j;
    };
exports[p(0x169)] = InstagramVerifyContact;