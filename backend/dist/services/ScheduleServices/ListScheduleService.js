'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x15f * -0x1 + 0x2209 + 0x2 * -0x10c1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x204)) / (-0x36b + 0x1a6c + -0x1700) * (parseInt(y(0x1ff)) / (-0x5a4 + -0x1584 + 0x1b2a)) + -parseInt(x(0x20c)) / (0x757 + -0x1745 * -0x1 + -0x1e99) + -parseInt(x(0x20e)) / (0x5b8 + 0x1491 + -0x1a45) * (parseInt(y(0x20b)) / (0x17dd + -0x1b1f + 0x347)) + parseInt(y(0x203)) / (0x12f * 0x1f + 0x681 + -0x732 * 0x6) + -parseInt(x(0x1e7)) / (0xc54 * 0x3 + 0x1218 + -0x370d) * (-parseInt(x(0x218)) / (-0x5 * 0x422 + 0x91c + 0x2 * 0x5cb)) + parseInt(x(0x20d)) / (0x15df + 0xbbc + -0x2192) + parseInt(x(0x1fe)) / (0x6bd + 0xed4 + 0x1f5 * -0xb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd039 * -0x1 + -0x5e705 + 0x1210a5));
var __importDefault = this && this[z(0x220) + z(0x21b)] || function (c) {
    const B = A;
    return c && c[B(0x21f)] ? c : { 'default': c };
};
const m = {};
function a() {
    const E = [
        'mediaUrl',
        'PVoBc',
        'sequelize',
        '__esModule',
        '__importDe',
        'pending',
        'ls/Message',
        '7uoNpzG',
        'and',
        'scheduleDa',
        'attributes',
        'length',
        'messages',
        'between',
        'BgNcK',
        'ticketId',
        'body',
        '../../mode',
        'rHHqK',
        'distinct',
        'WbRFW',
        'vIvfS',
        'default',
        'tenantId',
        'FngnC',
        'cIQJE',
        'ntAll',
        'offset',
        'limit',
        'FmfIl',
        '4561170pTKiyZ',
        '190lPViYa',
        'bPfWJ',
        'lte',
        'defineProp',
        '8692608bzLvAq',
        '10987luqDPu',
        'createdAt',
        'IkFXd',
        'value',
        'where',
        'hasMore',
        'DESC',
        '10vxWjdM',
        '594567uOWoBp',
        '644364qlGHvJ',
        '2614728JPgjLX',
        'userId',
        'LcZnk',
        'nkliz',
        'adEwB',
        'gte',
        'status',
        'findAndCou',
        'order',
        'push',
        '10532960mmWFlN',
        'count',
        'erty',
        'fault'
    ];
    a = function () {
        return E;
    };
    return a();
}
m[z(0x207)] = !![], Object[z(0x202) + A(0x21a)](exports, z(0x21f), m);
const sequelize_1 = require(A(0x21e)), Message_1 = __importDefault(require(A(0x1f1) + z(0x1e6))), ListScheduleService = async ({
        pageNumber: pageNumber = '1',
        tenantId: g,
        startDate: h,
        endDate: i
    }) => {
        const C = z, D = z, j = {};
        j[C(0x1f8)] = D(0x221), j[C(0x1f2)] = function (v, w) {
            return v && w;
        }, j[D(0x1ee)] = function (v, w) {
            return v * w;
        }, j[D(0x1f9)] = function (v, w) {
            return v - w;
        }, j[C(0x1f5)] = D(0x1e9) + 'te', j[D(0x206)] = D(0x1ef), j[C(0x211)] = C(0x20f), j[D(0x21d)] = C(0x205), j[D(0x212)] = D(0x1f0), j[C(0x210)] = C(0x21c), j[C(0x1fd)] = D(0x20a), j[D(0x200)] = function (v, w) {
            return v > w;
        }, j[C(0x1f4)] = function (v, w) {
            return v + w;
        };
        const k = j, l = { [sequelize_1['Op'][D(0x1e8)]]: [{ 'scheduleDate': { [sequelize_1['Op']['ne']]: null } }] };
        l[C(0x1f7)] = g, l[C(0x214)] = k[D(0x1f8)];
        const n = l;
        if (k[D(0x1f2)](h, i))
            n[sequelize_1['Op'][C(0x1e8)]][D(0x217)]({
                'scheduleDate': {
                    [sequelize_1['Op'][D(0x1ed)]]: [
                        h,
                        i
                    ]
                }
            });
        else {
            if (h)
                n[sequelize_1['Op'][D(0x1e8)]][C(0x217)]({ 'scheduleDate': { [sequelize_1['Op'][C(0x213)]]: h } });
            else
                i && n[sequelize_1['Op'][D(0x1e8)]][C(0x217)]({ 'scheduleDate': { [sequelize_1['Op'][D(0x201)]]: i } });
        }
        const o = -0x1403 + 0xb7 * 0x35 + -0x2f4 * 0x6, p = k[D(0x1ee)](o, k[D(0x1f9)](+pageNumber, 0x1a99 + 0x8 * -0x42c + -0x8 * -0xd9)), q = {};
        q[C(0x208)] = n, q[D(0x1ea)] = [
            'id',
            k[C(0x1f5)],
            k[C(0x206)],
            k[C(0x211)],
            k[C(0x21d)],
            k[D(0x212)],
            k[D(0x210)]
        ], q[D(0x1fc)] = o, q[C(0x1fb)] = p, q[D(0x1f3)] = !![], q[C(0x216)] = [[
                k[D(0x1f5)],
                k[C(0x1fd)]
            ]];
        const {
                count: r,
                rows: s
            } = await Message_1[D(0x1f6)][D(0x215) + D(0x1fa)](q), t = k[C(0x200)](r, k[C(0x1f4)](p, s[C(0x1eb)])), u = {};
        return u[C(0x1ec)] = s, u[C(0x219)] = r, u[C(0x209)] = t, u;
    };
exports[z(0x1f6)] = ListScheduleService;