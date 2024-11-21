'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x102d + 0x1ab3 + -0x295d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0x194)) / (-0x195b + 0x1d5 * 0xb + 0x1f * 0x2b) * (-parseInt(C(0x18b)) / (0x43 * 0x56 + 0x53 * -0x3d + -0x2b9)) + parseInt(B(0x184)) / (-0xb7b * 0x1 + 0x279 * 0x2 + 0x68c) * (parseInt(C(0x1d6)) / (0x219 * 0x11 + 0x168b + -0x3a30)) + parseInt(C(0x19c)) / (-0x2225 + -0x1823 * 0x1 + 0x3a4d) + -parseInt(B(0x18c)) / (-0x2336 + -0x19 * 0x6b + -0x1 * -0x2daf) + -parseInt(B(0x1c5)) / (-0xe8f + 0x1a3 * 0x12 + -0xe * 0x110) + -parseInt(B(0x1d8)) / (0x95 * 0x8 + 0x8 * -0x407 + 0x8 * 0x373) * (-parseInt(B(0x190)) / (0xa79 + -0x12a5 + 0x835)) + -parseInt(C(0x1c2)) / (-0xf20 + -0x3e3 * 0x1 + -0x130d * -0x1) * (-parseInt(B(0x1b6)) / (-0x47f + -0x330 * 0x4 + 0x114a * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xc4bf8 + 0x15745c + -0x67 * -0x5f3));
var __importDefault = this && this[D(0x187) + D(0x1cd)] || function (c) {
    const F = D;
    return c && c[F(0x198)] ? c : { 'default': c };
};
const k = {};
k[E(0x183)] = !![], Object[E(0x1a0) + E(0x1ab)](exports, E(0x198), k);
const cache_1 = require(D(0x1a5) + D(0x1af)), Message_1 = __importDefault(require(E(0x1cf) + D(0x188))), logger_1 = require(D(0x1d2) + D(0x191)), GetTicketWbotBaileys_1 = __importDefault(require(E(0x1ac) + D(0x1ca) + 'ys')), socketEmit_1 = __importDefault(require(D(0x1bd) + 'it')), SetTicketMessagesAsRead = async m => {
        const G = D, H = D, n = {};
        n[G(0x1d5)] = function (p, q) {
            return p === q;
        }, n[G(0x1b3)] = G(0x1ce), n[G(0x1c0)] = H(0x1a6), n[H(0x19d)] = G(0x1bc), n[G(0x1ba)] = function (p, q) {
            return p > q;
        }, n[H(0x1d7)] = function (p, q) {
            return p === q;
        }, n[H(0x1b0)] = H(0x1b1), n[G(0x1a7)] = H(0x1bf) + H(0x1c9), n[H(0x1b8)] = G(0x19e) + H(0x1c4);
        const o = n;
        try {
            const p = {};
            p[H(0x1ae) + H(0x1b2)] = 0x0, await m[G(0x18d)](p), await cache_1[H(0x195)][H(0x197)](H(0x1c8) + m[G(0x1cc)] + G(0x193), '0');
            const q = {};
            q[G(0x1d3)] = m['id'], q[G(0x1d4)] = ![], q[G(0x1a8)] = ![];
            const r = {};
            r[H(0x1b5)] = q, r[H(0x19f)] = [[
                    o[H(0x1b3)],
                    o[G(0x1c0)]
                ]];
            const s = await Message_1[G(0x18f)][H(0x1ad)](r);
            if (o[G(0x1d5)](m[H(0x1bb)], o[H(0x19d)])) {
                const x = await (0x98 * -0x3d + 0x1 * 0xd45 + -0x497 * -0x5, GetTicketWbotBaileys_1[G(0x18f)])(m);
                s[G(0x1d1)](async y => {
                    const I = H, J = H, z = JSON[I(0x189)](y[I(0x18e)]);
                    z[I(0x1c7)] && o[J(0x1d5)](z[J(0x1c7)][J(0x1d4)], ![]) && await x[I(0x1a1) + 'es']([z[I(0x1c7)]]);
                });
                if (o[G(0x1ba)](s[G(0x1be)], -0x146b * 0x1 + 0x16b + 0x1300)) {
                    const y = JSON[H(0x189)](JSON[G(0x1b4)](s[0x1abe + -0x1ca5 * 0x1 + -0x1 * -0x1e7][G(0x18e)]));
                    if (y[H(0x1c7)] && o[H(0x1d7)](y[G(0x1c7)][H(0x1d4)], ![])) {
                        const z = {};
                        z[G(0x185)] = !![], z[H(0x1d0) + 'es'] = [y], await x[G(0x199)](z, m[G(0x1a9)][H(0x1c6)] + '@' + (m[H(0x1cb)] ? o[H(0x1b0)] : o[H(0x1a7)]));
                    }
                }
            }
            const t = {};
            t[G(0x1a8)] = !![];
            const u = {};
            u[G(0x1d3)] = m['id'], u[H(0x1a8)] = ![];
            const v = {};
            v[H(0x1b5)] = u, await Message_1[H(0x18f)][G(0x18d)](t, v);
            const w = {};
            w[G(0x1c3)] = m[G(0x1c3)], w[G(0x1a2)] = o[G(0x1b8)], w[H(0x19b)] = m, (-0x773 + 0x621 * 0x1 + 0x152, socketEmit_1[H(0x18f)])(w);
        } catch (A) {
            console[G(0x192)](A), logger_1[G(0x1a4)][H(0x1aa)](H(0x1a3) + G(0x18a) + H(0x196) + H(0x1b7) + H(0x19a) + G(0x1c1) + H(0x186) + H(0x1b9) + A);
        }
    };
exports[E(0x18f)] = SetTicketMessagesAsRead;
function a() {
    const K = [
        '../models/',
        'lastMessag',
        'forEach',
        '../utils/l',
        'ticketId',
        'fromMe',
        'cWHRi',
        '1447172rcgUEg',
        'eqYrR',
        '5377688wHLDNv',
        'value',
        '3JxOCVo',
        'markRead',
        'onnected?\x20',
        '__importDe',
        'Message',
        'parse',
        'mark\x20messa',
        '4560OSyjwW',
        '2795364MKkDmb',
        'update',
        'dataJson',
        'default',
        '9TFRUri',
        'ogger',
        'log',
        ':unreads',
        '122JpdrvJ',
        'cacheLayer',
        'ges\x20as\x20rea',
        'set',
        '__esModule',
        'chatModify',
        'hatsApp\x20se',
        'payload',
        '482675tONWSc',
        'yXsLY',
        'ticket:upd',
        'order',
        'defineProp',
        'readMessag',
        'type',
        'Could\x20not\x20',
        'logger',
        '../libs/ca',
        'DESC',
        'IeIiH',
        'read',
        'contact',
        'warn',
        'erty',
        './GetTicke',
        'findAll',
        'unreadMess',
        'che',
        'IfPIx',
        'g.us',
        'ages',
        'zAVnN',
        'stringify',
        'where',
        '18370mOjeLw',
        'd.\x20Maybe\x20W',
        'YztfY',
        'Err:\x20',
        'IgGgs',
        'channel',
        'whatsapp',
        './socketEm',
        'length',
        's.whatsapp',
        'wEPAQ',
        'ssion\x20disc',
        '5630eJSuVO',
        'tenantId',
        'ate',
        '3987634uIZnte',
        'number',
        'key',
        'contacts:',
        '.net',
        'tWbotBaile',
        'isGroup',
        'contactId',
        'fault',
        'createdAt'
    ];
    a = function () {
        return K;
    };
    return a();
}