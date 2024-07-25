'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x17e)) / (-0x1 * -0x2a2 + -0x6a7 * -0x1 + -0x948) * (parseInt(r(0x18b)) / (-0x238b + -0x1d9 + -0x2 * -0x12b3)) + parseInt(r(0x19a)) / (0x1d72 + 0x8a4 + -0x2613) * (-parseInt(s(0x16e)) / (0x20a1 + 0x1606 + -0x1 * 0x36a3)) + parseInt(r(0x17c)) / (-0xd76 + -0x248a + 0x3d9 * 0xd) * (parseInt(s(0x181)) / (-0xd7e + -0x1ec8 + 0x2c4c)) + parseInt(r(0x18a)) / (-0x26 * 0x87 + -0x2020 + 0x3431) * (-parseInt(s(0x16f)) / (0x2310 + 0x2638 * -0x1 + 0x2 * 0x198)) + parseInt(r(0x195)) / (0x1dd8 + 0xc7c * 0x3 + -0x101 * 0x43) * (-parseInt(s(0x184)) / (0x18 + 0x346 + -0x354)) + parseInt(r(0x17d)) / (-0x1a + 0x12a9 + -0x1284) * (parseInt(r(0x187)) / (-0x20dd + -0x4c9 * -0x7 + -0x96)) + parseInt(s(0x177)) / (-0x20f6 + 0x1433 + 0xcd0) * (parseInt(s(0x179)) / (0x2d9 * 0xd + 0x1934 + -0x14b9 * 0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x1857a + -0x29541 + 0x2efa3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb2d * 0x3 + -0x16f * 0x1 + 0x2464);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[t(0x175) + t(0x197)] || function (c) {
    const v = u;
    return c && c[v(0x176)] ? c : { 'default': c };
};
const k = {};
k[u(0x190)] = !![], Object[u(0x178) + u(0x186)](exports, u(0x176), k);
const AppError_1 = __importDefault(require(u(0x182) + t(0x196) + 'r')), socketEmit_1 = __importDefault(require(u(0x198) + u(0x173) + u(0x191))), UpdateQueueIATicket = async (g, h, i = null) => {
        const w = t, x = u, j = {};
        j[w(0x17f)] = x(0x194), j[x(0x172)] = w(0x17b) + w(0x188), j[x(0x185)] = x(0x192) + w(0x174);
        const l = j, m = l[w(0x17f)][x(0x189)]('|');
        let n = 0x26a3 + -0x1153 * 0x1 + 0x155 * -0x10;
        while (!![]) {
            switch (m[n++]) {
            case '0':
                const o = {};
                o[x(0x19b)] = h;
                return o;
            case '1':
                const p = {};
                p[x(0x18f)] = h[w(0x18f)], p[x(0x18d)] = l[w(0x172)], p[x(0x18c)] = h, (0x182d + 0xc8f + -0x1 * 0x24bc, socketEmit_1[x(0x199)])(p);
                continue;
            case '2':
                await h[x(0x171)]();
                continue;
            case '3':
                if (!h)
                    throw new AppError_1[(w(0x199))](l[x(0x185)], 0x1 * 0x267b + -0x2001 + -0x4e6);
                continue;
            case '4':
                const q = {};
                q[w(0x183)] = g, q[x(0x180) + 'ow'] = null, q[w(0x170)] = null, q[x(0x18e)] = ![], q[w(0x193)] = i, await h[w(0x17a)](q);
                continue;
            }
            break;
        }
    };
function a() {
    const y = [
        '8IrUPDR',
        'chatFlowId',
        'reload',
        'ZaShO',
        'ers/socket',
        'KET_FOUND',
        '__importDe',
        '__esModule',
        '18655rjefWK',
        'defineProp',
        '2170wxhMGP',
        'update',
        'ticket:upd',
        '210GGDPYs',
        '446193THIlmc',
        '1GiNoOX',
        'UaJHJ',
        'stepChatFl',
        '23976HQUgVQ',
        '../../erro',
        'queueId',
        '180ulhRAX',
        'jYVKW',
        'erty',
        '60bUCPUR',
        'ate',
        'split',
        '1670445pKcVKW',
        '195010lNzWmp',
        'payload',
        'type',
        'is_chat_ia',
        'tenantId',
        'value',
        'Emit',
        'ERR_NO_TIC',
        'userId',
        '3|4|2|1|0',
        '85194sBiIxV',
        'rs/AppErro',
        'fault',
        '../../help',
        'default',
        '1770qdANdk',
        'ticket',
        '1076ZMMFUA'
    ];
    a = function () {
        return y;
    };
    return a();
}
exports[t(0x199)] = UpdateQueueIATicket;