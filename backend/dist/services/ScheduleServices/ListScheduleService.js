'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x167)) / (-0x1 * 0x1e87 + -0xe95 * 0x1 + 0x2d1d * 0x1) * (-parseInt(x(0x15c)) / (0x3 * -0x3e9 + 0x1c0d * 0x1 + -0x8 * 0x20a)) + parseInt(x(0x148)) / (0x7 * 0x3bc + 0x1ac1 + 0x3c7 * -0xe) * (-parseInt(x(0x16f)) / (-0x3 * 0x1c3 + -0xe87 + -0x34e * -0x6)) + -parseInt(x(0x16d)) / (0x1 * 0x1925 + 0x64 * -0x4a + 0x3c8) + -parseInt(x(0x151)) / (0x22f3 + -0x1969 + 0x1 * -0x984) + -parseInt(x(0x15d)) / (0x702 * 0x3 + 0x11 * 0x23 + -0x1752) + -parseInt(x(0x149)) / (-0x3 * 0x329 + -0x1872 + 0x21f5 * 0x1) * (-parseInt(x(0x15e)) / (-0x1829 + -0x166 + -0x5b * -0x48)) + parseInt(x(0x15f)) / (0x3aa + -0xa89 + -0x1d * -0x3d) * (parseInt(y(0x145)) / (0x2 * -0x8d8 + -0x6 * 0xca + 0xd5 * 0x1b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x33 * 0x15eb + 0xfadcd + -0x7ae73));
var __importDefault = this && this[z(0x153) + A(0x164)] || function (c) {
    const B = A;
    return c && c[B(0x144)] ? c : { 'default': c };
};
const m = {};
function a() {
    const E = [
        'userId',
        '4EJfpwY',
        'status',
        'lDzAM',
        'findAndCou',
        '../../mode',
        'DESC',
        'oXpap',
        'sequelize',
        'ntAll',
        'length',
        'body',
        'pending',
        'QxvsP',
        'QTNXV',
        'gte',
        'ls/Message',
        'hasMore',
        'Pisur',
        '__esModule',
        '143KxkjVC',
        'messages',
        'distinct',
        '755925fMmTNm',
        '664GkiNFA',
        'cVGkL',
        'ticketId',
        'mediaUrl',
        'count',
        'sDNEx',
        'value',
        'default',
        '4565394aigiGT',
        'rpxKw',
        '__importDe',
        'createdAt',
        'RqfGU',
        'where',
        'erty',
        'order',
        'lte',
        'offset',
        'between',
        '8698FjCQCD',
        '8301937PcHXrt',
        '101187wdYXMO',
        '2488690eGCkml',
        'UPHKI',
        'HgNWM',
        'limit',
        'attributes',
        'fault',
        'push',
        'tenantId',
        '121uNXVLL',
        'defineProp',
        'and',
        'nqKJl',
        'nIxIP',
        'scheduleDa',
        '3165445BMYTGM'
    ];
    a = function () {
        return E;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1c7e + 0x329 + -0x1 * -0x1a91);
        let h = e[f];
        return h;
    }, b(c, d);
}
m[A(0x14f)] = !![], Object[z(0x168) + A(0x157)](exports, z(0x144), m);
const sequelize_1 = require(A(0x176)), Message_1 = __importDefault(require(A(0x173) + z(0x141))), ListScheduleService = async ({
        pageNumber: pageNumber = '1',
        tenantId: g,
        startDate: h,
        endDate: i
    }) => {
        const C = z, D = z, j = {};
        j[C(0x13e)] = D(0x13d), j[C(0x14a)] = function (v, w) {
            return v && w;
        }, j[C(0x16a)] = function (v, w) {
            return v * w;
        }, j[D(0x16b)] = function (v, w) {
            return v - w;
        }, j[C(0x160)] = D(0x16c) + 'te', j[C(0x14e)] = C(0x14b), j[C(0x143)] = C(0x16e), j[D(0x152)] = D(0x154), j[D(0x155)] = D(0x13c), j[D(0x13f)] = D(0x14c), j[D(0x171)] = D(0x174), j[D(0x175)] = function (v, w) {
            return v > w;
        }, j[C(0x161)] = function (v, w) {
            return v + w;
        };
        const k = j, l = { [sequelize_1['Op'][C(0x169)]]: [{ 'scheduleDate': { [sequelize_1['Op']['ne']]: null } }] };
        l[C(0x166)] = g, l[D(0x170)] = k[D(0x13e)];
        const n = l;
        if (k[D(0x14a)](h, i))
            n[sequelize_1['Op'][D(0x169)]][D(0x165)]({
                'scheduleDate': {
                    [sequelize_1['Op'][C(0x15b)]]: [
                        h,
                        i
                    ]
                }
            });
        else {
            if (h)
                n[sequelize_1['Op'][D(0x169)]][D(0x165)]({ 'scheduleDate': { [sequelize_1['Op'][D(0x140)]]: h } });
            else
                i && n[sequelize_1['Op'][D(0x169)]][C(0x165)]({ 'scheduleDate': { [sequelize_1['Op'][D(0x159)]]: i } });
        }
        const o = 0x2 * -0x125f + -0x6 * -0x526 + -0x602 * -0x1, p = k[D(0x16a)](o, k[C(0x16b)](+pageNumber, 0x634 + 0x2687 + 0xe5 * -0x32)), q = {};
        q[C(0x156)] = n, q[C(0x163)] = [
            'id',
            k[C(0x160)],
            k[C(0x14e)],
            k[D(0x143)],
            k[C(0x152)],
            k[D(0x155)],
            k[C(0x13f)]
        ], q[D(0x162)] = o, q[D(0x15a)] = p, q[D(0x147)] = !![], q[D(0x158)] = [[
                k[D(0x160)],
                k[D(0x171)]
            ]];
        const {
                count: r,
                rows: s
            } = await Message_1[D(0x150)][C(0x172) + C(0x177)](q), t = k[D(0x175)](r, k[D(0x161)](p, s[D(0x178)])), u = {};
        return u[C(0x146)] = s, u[C(0x14d)] = r, u[C(0x142)] = t, u;
    };
exports[A(0x150)] = ListScheduleService;