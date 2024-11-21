'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x1d9)) / (0x225e + -0xc1 + 0x867 * -0x4) * (-parseInt(r(0x1da)) / (0x62a * 0x2 + -0x137 * -0x1e + -0x30c4)) + parseInt(s(0x1de)) / (0xb2 + 0x1 * 0x305 + 0x9e * -0x6) + -parseInt(r(0x1b9)) / (0x11c + 0xbd4 + 0x676 * -0x2) * (-parseInt(s(0x1dc)) / (-0x6cd + 0x1d6e * -0x1 + 0x2440)) + -parseInt(s(0x1ba)) / (0x3 * 0xaed + -0x5ba + 0xbb * -0x25) * (parseInt(r(0x1c0)) / (-0x35b + 0x194d + -0x15eb)) + parseInt(r(0x1d2)) / (0x26c9 + 0x3 * -0xa06 + -0x8af) + -parseInt(s(0x1df)) / (0x2667 + 0x269e + -0x1a * 0x2f6) * (parseInt(r(0x1c2)) / (0x1 * 0x22ee + 0x17e * 0x2 + -0x25e0)) + parseInt(r(0x1c6)) / (0xf86 + -0x1 * 0x35b + -0xc20) * (-parseInt(r(0x1d8)) / (-0x8 * -0x3d + -0xfad + 0x83 * 0x1b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x83a7a + 0x4943 * -0xb + 0x109c89));
var __importDefault = this && this[t(0x1c7) + t(0x1b3)] || function (c) {
    const v = t;
    return c && c[v(0x1d3)] ? c : { 'default': c };
};
const k = {};
k[u(0x1d7)] = !![], Object[t(0x1e5) + t(0x1e0)](exports, t(0x1d3), k);
function a() {
    const y = [
        'toReplyMes',
        'isGroup',
        'default',
        'channel',
        'ShowStepAu',
        'type',
        'autoReplyI',
        'tenantId',
        's/AutoRepl',
        'chatBot',
        '2433792QaAQWO',
        '__esModule',
        'OpSgx',
        's/TicketSe',
        'telegram',
        'value',
        '24uFHKis',
        '2YUfNjI',
        '523996xukFXi',
        'ateLogTick',
        '37295MvEXxx',
        'VXwYx',
        '843357XeyFES',
        '221121FPvqBp',
        'erty',
        'sageServic',
        'etService',
        'findByPk',
        'contactId',
        'defineProp',
        'update',
        'ticketId',
        'fault',
        'yServices/',
        'cBDcw',
        'userId',
        '../models/',
        'stepAutoRe',
        '292XGFIMs',
        '198EAzCSc',
        'Contact',
        '../service',
        'substr',
        'autoReply',
        'number',
        '35903DKVRqt',
        'mQJdH',
        '10TqfuVE',
        'rvices/Cre',
        'plyId',
        'indexOf',
        '379181DLgKFM',
        '__importDe'
    ];
    a = function () {
        return y;
    };
    return a();
}
const Contact_1 = __importDefault(require(u(0x1b7) + u(0x1bb))), ShowStepAutoReplyMessageService_1 = __importDefault(require(u(0x1bc) + t(0x1d0) + t(0x1b4) + u(0x1cc) + t(0x1c8) + u(0x1e1) + 'e')), CreateLogTicketService_1 = __importDefault(require(t(0x1bc) + t(0x1d5) + t(0x1c3) + t(0x1db) + u(0x1e2))), AutoReplyWelcome = async f => {
        const w = t, x = t, g = {};
        g[w(0x1c1)] = function (p, q) {
            return p === q;
        }, g[w(0x1b5)] = function (p, q) {
            return p !== q;
        }, g[x(0x1dd)] = w(0x1d6), g[w(0x1d4)] = w(0x1d1);
        const h = g;
        if (f[w(0x1b6)] || f[x(0x1c9)])
            return;
        const i = await (-0x18 * -0xb0 + 0xcae * 0x1 + -0xf * 0x1f2, ShowStepAutoReplyMessageService_1[w(0x1ca)])(-0xe26 + -0xcc2 + -0x29 * -0xa8, 0x1 * 0x25bd + -0x197e * 0x1 + -0x415 * 0x3, 0x6fd + -0x18de + 0x11e1, !![], f[x(0x1cf)]);
        if (!i)
            return;
        const j = await Contact_1[x(0x1ca)][w(0x1e3)](f[w(0x1e4)]), {celularTeste: l} = i[x(0x1be)], m = j?.[w(0x1bf)];
        if (l && h[x(0x1c1)](m?.[w(0x1c5)](l[x(0x1bd)](0x1 * -0x105b + -0xdf0 + 0x1e4c)), -(-0xa4d + -0x9fd * 0x3 + 0x3d * 0xa9)) || !m) {
            if (h[w(0x1b5)](f[w(0x1cb)], h[w(0x1dd)]))
                return;
        }
        const n = {};
        n[w(0x1ce) + 'd'] = i[x(0x1be)]['id'], n[w(0x1b8) + x(0x1c4)] = i['id'], await f[x(0x1b1)](n);
        const o = {};
        o[x(0x1b2)] = f['id'], o[x(0x1cd)] = h[w(0x1d4)], await (-0x1ce1 * -0x1 + 0x3 * -0x4fd + -0xdea, CreateLogTicketService_1[w(0x1ca)])(o);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x7e7 + 0x16c6 + -0x4 * 0x73f);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[u(0x1ca)] = AutoReplyWelcome;