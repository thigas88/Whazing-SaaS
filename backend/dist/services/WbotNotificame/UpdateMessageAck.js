'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xce * 0x2c + 0x5 * -0x740 + -0x1 * -0x4969);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
function a() {
    const y = [
        'type',
        'ls/Message',
        '910fjFfxF',
        'where',
        'defineProp',
        'error',
        'chat:updat',
        '../../help',
        '2WlXRre',
        'erty',
        'izar\x20o\x20cam',
        'ntar\x20atual',
        'ageAck',
        '2895756XDKNjq',
        'ack',
        'tenantId',
        'RttqC',
        'payload',
        '282045EbLGTK',
        'BXbMF',
        'findOne',
        'po\x20\x27ack\x27:',
        '__esModule',
        'ers/socket',
        '6215706StBoXi',
        '9078528CdDbkR',
        '../../mode',
        'Emit',
        'UpdateMess',
        'update',
        '2296iKLKCP',
        '619982TqhTWJ',
        'mtsaC',
        '68uFbpKv',
        '53361hkHNzi',
        'fault',
        '14336RVVLex',
        'Erro\x20ao\x20te',
        'default',
        'messageId',
        'value',
        '__importDe'
    ];
    a = function () {
        return y;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1d9)) / (0x97e + 0x5c2 * 0x1 + -0xf3f) * (parseInt(p(0x1e7)) / (0x24 * -0x76 + 0x1a15 * 0x1 + -0x97b)) + parseInt(q(0x1c2)) / (-0x1 * -0x24f3 + 0x1 * 0x47d + -0xf * 0x2c3) + parseInt(q(0x1d6)) / (-0x18ad + 0x16b * 0x6 + 0x565 * 0x3) * (parseInt(p(0x1c7)) / (0x1 * 0xe47 + -0x2178 + 0x1336)) + parseInt(p(0x1ce)) / (0x1 * -0x169f + -0x6b4 + 0x1d59) + parseInt(p(0x1cd)) / (-0x1 * 0x1e8f + -0x469 * 0x7 + 0x3d75) + -parseInt(p(0x1d3)) / (0xcdc * -0x1 + 0x41c + 0x8c8) * (-parseInt(p(0x1d7)) / (-0xda3 + -0x175b + 0x2507)) + -parseInt(p(0x1e1)) / (-0x149d + 0x1501 * -0x1 + 0x29a8) * (parseInt(p(0x1d4)) / (0x4ee * -0x2 + -0x577 * 0x4 + -0x1fc3 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x10834d + -0xddaad + 0xad2ec));
var __importDefault = this && this[r(0x1de) + r(0x1d8)] || function (c) {
    const t = s;
    return c && c[t(0x1cb)] ? c : { 'default': c };
};
const k = {};
k[r(0x1dd)] = !![], Object[r(0x1e3) + s(0x1e8)](exports, s(0x1cb), k), exports[s(0x1d1) + r(0x1c1)] = void (0x1ed8 * 0x1 + -0xa9a + -0x143e * 0x1);
const Message_1 = __importDefault(require(s(0x1cf) + s(0x1e0))), socketEmit_1 = __importDefault(require(s(0x1e6) + s(0x1cc) + s(0x1d0))), UpdateMessageAck = async g => {
        const u = s, v = s, h = {
                'RttqC': function (i, j, l) {
                    return i(j, l);
                },
                'BXbMF': u(0x1e5) + 'e',
                'mtsaC': u(0x1da) + v(0x1ea) + v(0x1e9) + u(0x1ca)
            };
        try {
            const i = {};
            i[u(0x1dc)] = g;
            const j = {};
            j[v(0x1e2)] = i;
            const l = await Message_1[v(0x1db)][v(0x1c9)](j);
            if (!l) {
                h[v(0x1c5)](setTimeout, async () => {
                    const w = u, x = v;
                    await (0x1 * 0x10d0 + 0x1606 + -0x679 * 0x6, exports[w(0x1d1) + w(0x1c1)])(g);
                }, -0x1fdd + -0xdc9 * 0x1 + 0x318e);
                return;
            }
            const m = {};
            m[v(0x1c3)] = 0x2, await l[v(0x1d2)](m);
            const n = {};
            n[v(0x1c4)] = l[u(0x1c4)], n[v(0x1df)] = h[v(0x1c8)], n[v(0x1c6)] = l, (0x8d * 0x2 + 0x169 * 0x2 + -0x1 * 0x3ec, socketEmit_1[v(0x1db)])(n);
        } catch (o) {
            console[v(0x1e4)](h[v(0x1d5)], o);
        }
    };
exports[s(0x1d1) + s(0x1c1)] = UpdateMessageAck;