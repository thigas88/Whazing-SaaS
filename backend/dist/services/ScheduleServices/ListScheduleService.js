'use strict';
function a() {
    const E = [
        '1168048GUzqRg',
        'offset',
        'jWUdy',
        'fault',
        '290iUfUKH',
        'value',
        '../../mode',
        'QDOyf',
        'VWpmf',
        '121950WmTAOG',
        'order',
        '__importDe',
        '2703555lqbNHt',
        'pending',
        '14798RsYbBo',
        'createdAt',
        '596456wEgcNg',
        'tenantId',
        'limit',
        'attributes',
        'gte',
        'PxVXz',
        'erty',
        'YdIgu',
        '75MaJeqc',
        'WbSVv',
        'body',
        'findAndCou',
        'defineProp',
        'status',
        'UwHUV',
        'ZfqKe',
        'XyKfy',
        'distinct',
        'ticketId',
        'between',
        'messages',
        'scheduleDa',
        'length',
        'uUHkL',
        'ntAll',
        '6186dWwMYr',
        'and',
        'mediaUrl',
        'hasMore',
        'default',
        'nuBBr',
        'lte',
        'sequelize',
        'PThfl',
        'count',
        'JlWFX',
        'ls/Message',
        '1953992LUrnZc',
        'DESC',
        'userId',
        'where',
        '__esModule',
        'push'
    ];
    a = function () {
        return E;
    };
    return a();
}
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x210)) / (-0x26a7 * -0x1 + -0x24f4 + -0x2 * 0xd9) + -parseInt(x(0x215)) / (-0xb87 * -0x2 + -0x14e7 * 0x1 + 0xb7 * -0x3) * (parseInt(x(0x21f)) / (-0x289 + -0xe9 * -0x20 + -0x1 * 0x1a94)) + parseInt(x(0x207)) / (0x1f0 * -0x9 + 0x79a + -0x61 * -0x1a) + parseInt(x(0x20b)) / (0xd8e * -0x1 + -0x1e3a + 0x2bcd) * (parseInt(x(0x1f5)) / (-0x3e4 * 0xa + -0x239f + 0x4a8d)) + -parseInt(x(0x217)) / (0x158 * -0x10 + 0x11c5 * 0x2 + -0x11 * 0xd3) + parseInt(x(0x201)) / (-0x1 * 0x476 + 0x1799 + -0x1 * 0x131b) + -parseInt(x(0x213)) / (0x1 * 0x2048 + 0x97f + -0x29be);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1b06 * 0x16 + -0x1763 + 0x4c6));
var __importDefault = this && this[z(0x212) + z(0x20a)] || function (c) {
    const B = A;
    return c && c[B(0x205)] ? c : { 'default': c };
};
const m = {};
m[z(0x20c)] = !![], Object[z(0x223) + z(0x21d)](exports, A(0x205), m);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xf74 + -0x1e * -0x35 + -0x1 * -0xb2b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(z(0x1fc)), Message_1 = __importDefault(require(A(0x20d) + z(0x200))), ListScheduleService = async ({
        pageNumber: pageNumber = '1',
        tenantId: g,
        startDate: h,
        endDate: i
    }) => {
        const C = z, D = z, j = {};
        j[C(0x1ff)] = D(0x214), j[C(0x225)] = function (v, w) {
            return v && w;
        }, j[C(0x220)] = function (v, w) {
            return v * w;
        }, j[D(0x1f3)] = function (v, w) {
            return v - w;
        }, j[D(0x21e)] = D(0x1f1) + 'te', j[D(0x209)] = C(0x1ee), j[D(0x227)] = D(0x203), j[D(0x226)] = C(0x216), j[C(0x1fd)] = D(0x221), j[C(0x1fa)] = D(0x1f7), j[D(0x21c)] = C(0x202), j[C(0x20f)] = function (v, w) {
            return v > w;
        }, j[D(0x20e)] = function (v, w) {
            return v + w;
        };
        const k = j, l = { [sequelize_1['Op'][C(0x1f6)]]: [{ 'scheduleDate': { [sequelize_1['Op']['ne']]: null } }] };
        l[D(0x218)] = g, l[C(0x224)] = k[C(0x1ff)];
        const n = l;
        if (k[C(0x225)](h, i))
            n[sequelize_1['Op'][D(0x1f6)]][C(0x206)]({
                'scheduleDate': {
                    [sequelize_1['Op'][D(0x1ef)]]: [
                        h,
                        i
                    ]
                }
            });
        else {
            if (h)
                n[sequelize_1['Op'][C(0x1f6)]][D(0x206)]({ 'scheduleDate': { [sequelize_1['Op'][D(0x21b)]]: h } });
            else
                i && n[sequelize_1['Op'][D(0x1f6)]][C(0x206)]({ 'scheduleDate': { [sequelize_1['Op'][D(0x1fb)]]: i } });
        }
        const o = 0x1238 + 0x1d2f + -0x2f3f, p = k[C(0x220)](o, k[D(0x1f3)](+pageNumber, -0x435 * 0x1 + 0xd41 * -0x1 + 0x107 * 0x11)), q = {};
        q[D(0x204)] = n, q[C(0x21a)] = [
            'id',
            k[C(0x21e)],
            k[C(0x209)],
            k[C(0x227)],
            k[C(0x226)],
            k[D(0x1fd)],
            k[C(0x1fa)]
        ], q[C(0x219)] = o, q[D(0x208)] = p, q[C(0x1ed)] = !![], q[C(0x211)] = [[
                k[D(0x21e)],
                k[D(0x21c)]
            ]];
        const {
                count: r,
                rows: s
            } = await Message_1[C(0x1f9)][D(0x222) + D(0x1f4)](q), t = k[C(0x20f)](r, k[D(0x20e)](p, s[D(0x1f2)])), u = {};
        return u[D(0x1f0)] = s, u[D(0x1fe)] = r, u[C(0x1f8)] = t, u;
    };
exports[z(0x1f9)] = ListScheduleService;