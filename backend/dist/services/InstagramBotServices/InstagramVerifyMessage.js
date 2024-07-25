'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x1b5)) / (-0x1e1c + 0x1529 + -0x23d * -0x4) * (parseInt(n(0x1c6)) / (-0xece + 0xd66 + -0x16a * -0x1)) + parseInt(o(0x1b0)) / (-0x1 * 0x1a89 + 0xa07 + 0x1085) * (-parseInt(o(0x1b7)) / (0x16ae + -0x18a9 + -0x49 * -0x7)) + -parseInt(n(0x1b4)) / (-0x1552 + 0x540 + -0x1017 * -0x1) * (-parseInt(o(0x1c5)) / (0x1607 + -0x7 * -0x71 + 0x2c * -0x92)) + -parseInt(o(0x1cd)) / (0xfda * -0x1 + 0x1 * -0xaab + 0x1a8c) * (-parseInt(n(0x1c3)) / (0x2018 + 0x25 + -0x2035)) + -parseInt(n(0x1b2)) / (-0xbeb * 0x1 + -0x6f3 * 0x3 + 0x137 * 0x1b) + -parseInt(n(0x1b3)) / (-0x1ee0 + -0x1201 + -0x30eb * -0x1) + parseInt(n(0x1c8)) / (0x1fb + -0x135e * -0x1 + -0x154e) * (-parseInt(n(0x1ce)) / (-0x538 * -0x1 + 0x5f7 + 0xb23 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x70798 * 0x1 + -0xd * -0x12733 + 0x39e1e));
function a() {
    const u = [
        '2jcnhfS',
        'default',
        '2780796eDspmm',
        'geService',
        'PKvkC',
        'update',
        'defineProp',
        'UgDXn',
        'Services/C',
        'PWbZt',
        'messageDat',
        'chat',
        'reateMessa',
        'erty',
        '3520208bOmBZy',
        'tenantId',
        '18VDYMiH',
        '1230670iXlNgJ',
        'xPLWo',
        '22rEYkUF',
        'getTime',
        '__esModule',
        'fault',
        '__importDe',
        '14mgdINJ',
        '560148DmCLrj',
        '../Message',
        'received',
        'item_id',
        'value',
        'text',
        '3Rmzxaf',
        'message',
        '1886778QASPBN',
        '3559990JXSiYZ',
        '3815wFnlky'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[p(0x1cc) + q(0x1cb)] || function (c) {
    const r = p;
    return c && c[r(0x1ca)] ? c : { 'default': c };
};
const k = {};
k[q(0x1ae)] = !![], Object[p(0x1bb) + q(0x1c2)](exports, p(0x1ca), k);
const CreateMessageService_1 = __importDefault(require(p(0x1cf) + q(0x1bd) + p(0x1c1) + p(0x1b8))), VerifyMessage = async (d, e, f, g) => {
        const s = p, t = q, h = {
                'UgDXn': function (l, m) {
                    return l(m);
                },
                'xPLWo': s(0x1c0),
                'PWbZt': t(0x1ac),
                'PKvkC': function (l, m) {
                    return l || m;
                }
            }, i = {
                'messageId': h[s(0x1bc)](String, d[s(0x1b1)][t(0x1ad)]),
                'ticketId': f['id'],
                'contactId': e ? undefined : g['id'],
                'body': d[t(0x1b1)][t(0x1af)],
                'fromMe': e,
                'read': e,
                'mediaType': h[s(0x1c7)],
                'quotedMsgId': '',
                'timestamp': new Date()[t(0x1c9)](),
                'status': h[t(0x1be)]
            };
        await f[t(0x1ba)]({
            'lastMessage': d[t(0x1b1)][t(0x1af)],
            'lastMessageAt': new Date()[t(0x1c9)](),
            'answered': h[t(0x1b9)](e, ![])
        });
        const j = {};
        j[s(0x1bf) + 'a'] = i, j[t(0x1c4)] = f[s(0x1c4)], await (0x251 * 0xd + 0x1d27 + -0x3b44, CreateMessageService_1[s(0x1b6)])(j);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xabf * 0x3 + 0x16 * -0x147 + 0x3e03);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[p(0x1b6)] = VerifyMessage;