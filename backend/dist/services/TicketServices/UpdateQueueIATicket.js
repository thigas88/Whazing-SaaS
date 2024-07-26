'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x167)) / (0x1 * 0x129f + -0x56 * -0x5 + -0x144c) * (-parseInt(r(0x152)) / (-0x1 * 0x15e1 + -0xb * 0x1d3 + 0x29f4)) + parseInt(s(0x153)) / (-0x1a5d * 0x1 + -0x269f * 0x1 + 0x40ff) + parseInt(r(0x164)) / (-0x1bae + 0x1 * -0x56f + 0x2121) + -parseInt(r(0x149)) / (-0x1d4d + 0x1 * -0x1f + 0x1d71) + -parseInt(r(0x168)) / (0x25f2 + 0xc9f + -0x2a9 * 0x13) + parseInt(s(0x14c)) / (-0x803 * 0x1 + 0x402 + 0x408) * (-parseInt(s(0x14d)) / (0x6e1 + 0x1803 + -0x1edc)) + -parseInt(s(0x157)) / (0xf36 + -0xa57 + -0x4d6) * (-parseInt(r(0x159)) / (0x2 * 0xdf5 + -0xd * 0x90 + 0x4 * -0x524));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8a298 + 0x1 * -0xa5b5d + 0x21155 * 0x6));
var __importDefault = this && this[t(0x156) + u(0x15f)] || function (c) {
    const v = u;
    return c && c[v(0x16a)] ? c : { 'default': c };
};
const k = {};
function a() {
    const y = [
        'ate',
        'defineProp',
        'value',
        'chatFlowId',
        'userId',
        'ticket:upd',
        'type',
        '5131480xflHjo',
        '../../help',
        '0|1|4|2|3',
        '42SKxjAl',
        '1174232jsmFzU',
        'payload',
        'default',
        'queueId',
        'zKfIw',
        '12KEmUXb',
        '84135cPDouF',
        'reload',
        'is_chat_ia',
        '__importDe',
        '30140919RzMrSs',
        'ERR_NO_TIC',
        '10EOkQTM',
        'ers/socket',
        'tenantId',
        'split',
        'KET_FOUND',
        'ticket',
        'fault',
        'erty',
        'Emit',
        'update',
        'DYtbO',
        '1055764CBaiPM',
        'rs/AppErro',
        'GKPtf',
        '112276QMqJNR',
        '2160804qQlpiN',
        'stepChatFl',
        '__esModule',
        '../../erro'
    ];
    a = function () {
        return y;
    };
    return a();
}
k[t(0x16e)] = !![], Object[t(0x16d) + t(0x160)](exports, t(0x16a), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7f * -0x25 + -0x3f * 0x49 + 0x1 * 0xe3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(u(0x16b) + u(0x165) + 'r')), socketEmit_1 = __importDefault(require(u(0x14a) + t(0x15a) + t(0x161))), UpdateQueueIATicket = async (g, h, i = null) => {
        const w = u, x = t, j = {};
        j[w(0x151)] = x(0x14b), j[w(0x163)] = x(0x158) + w(0x15d), j[w(0x166)] = x(0x147) + w(0x16c);
        const l = j, m = l[w(0x151)][x(0x15c)]('|');
        let n = -0x1271 + -0x668 + -0x18d9 * -0x1;
        while (!![]) {
            switch (m[n++]) {
            case '0':
                if (!h)
                    throw new AppError_1[(x(0x14f))](l[x(0x163)], 0x7a * -0x35 + 0x109 + -0x1 * -0x19cd);
                continue;
            case '1':
                const o = {};
                o[x(0x150)] = g, o[w(0x169) + 'ow'] = null, o[x(0x16f)] = null, o[x(0x155)] = ![], o[w(0x170)] = i, await h[x(0x162)](o);
                continue;
            case '2':
                const p = {};
                p[w(0x15b)] = h[x(0x15b)], p[x(0x148)] = l[x(0x166)], p[x(0x14e)] = h, (-0x1486 + 0x1 * -0x8a6 + 0x1d2c * 0x1, socketEmit_1[w(0x14f)])(p);
                continue;
            case '3':
                const q = {};
                q[x(0x15e)] = h;
                return q;
            case '4':
                await h[w(0x154)]();
                continue;
            }
            break;
        }
    };
exports[t(0x14f)] = UpdateQueueIATicket;