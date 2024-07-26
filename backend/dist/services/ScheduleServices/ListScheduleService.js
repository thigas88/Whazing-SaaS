'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x8f)) / (-0x2d2 + -0x1a20 * -0x1 + 0x4a9 * -0x5) + -parseInt(x(0x81)) / (-0x2497 + -0x22f7 + -0x4790 * -0x1) + -parseInt(x(0x72)) / (0x1 * -0xcca + 0x5 * 0x265 + 0xd4) * (parseInt(y(0x71)) / (0xa91 + -0xb * 0x14 + -0x9b1 * 0x1)) + parseInt(y(0x98)) / (0x1150 + 0x199e + -0x2ae9) * (-parseInt(y(0x8c)) / (0xe * -0x247 + -0x2 * 0x409 + -0x2b * -0xee)) + parseInt(x(0x6b)) / (-0x1 * -0xb3e + 0x195 * 0x8 + -0x17df) * (-parseInt(y(0x78)) / (0x1d1c + -0x1 * -0x124e + -0xa * 0x4bd)) + -parseInt(y(0x88)) / (0x3 * 0x6fd + 0x6d * 0xe + -0x1ae4) + parseInt(x(0x9e)) / (-0xbb * -0x7 + -0x26d7 + 0x21c4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x116 * -0xf45 + -0x31a39 + -0x4f6d * -0x61));
var __importDefault = this && this[z(0x6d) + A(0x79)] || function (c) {
    const B = z;
    return c && c[B(0x8a)] ? c : { 'default': c };
};
const m = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x41 * 0x67 + 0x1 * -0x8fb + -0x151 * -0x1b);
        let h = e[f];
        return h;
    }, b(c, d);
}
m[A(0xa3)] = !![], Object[z(0x99) + A(0xa4)](exports, z(0x8a), m);
const sequelize_1 = require(z(0x77)), Message_1 = __importDefault(require(z(0x69) + z(0x7d))), ListScheduleService = async ({
        pageNumber: pageNumber = '1',
        tenantId: g,
        startDate: h,
        endDate: i
    }) => {
        const C = A, D = A, j = {};
        j[C(0x90)] = C(0x9c), j[D(0x96)] = function (v, w) {
            return v && w;
        }, j[D(0x6e)] = function (v, w) {
            return v * w;
        }, j[C(0x95)] = function (v, w) {
            return v - w;
        }, j[C(0x86)] = C(0x92) + 'te', j[C(0x97)] = C(0x82), j[D(0x74)] = C(0x9d), j[C(0x76)] = D(0x89), j[D(0x7b)] = D(0x91), j[C(0xa2)] = C(0x9f), j[D(0x94)] = C(0x9b), j[C(0x6f)] = function (v, w) {
            return v > w;
        }, j[D(0x8d)] = function (v, w) {
            return v + w;
        };
        const k = j, l = { [sequelize_1['Op'][C(0x75)]]: [{ 'scheduleDate': { [sequelize_1['Op']['ne']]: null } }] };
        l[C(0xa1)] = g, l[D(0x8b)] = k[C(0x90)];
        const n = l;
        if (k[C(0x96)](h, i))
            n[sequelize_1['Op'][D(0x75)]][C(0x7e)]({
                'scheduleDate': {
                    [sequelize_1['Op'][C(0xa0)]]: [
                        h,
                        i
                    ]
                }
            });
        else {
            if (h)
                n[sequelize_1['Op'][C(0x75)]][D(0x7e)]({ 'scheduleDate': { [sequelize_1['Op'][D(0x85)]]: h } });
            else
                i && n[sequelize_1['Op'][C(0x75)]][D(0x7e)]({ 'scheduleDate': { [sequelize_1['Op'][C(0x73)]]: i } });
        }
        const o = -0x1dd7 * 0x1 + -0x1 * -0x277 + 0x1b88, p = k[C(0x6e)](o, k[C(0x95)](+pageNumber, 0x1841 + 0x9a2 + -0x21e2 * 0x1)), q = {};
        q[C(0x84)] = n, q[D(0x80)] = [
            'id',
            k[D(0x86)],
            k[C(0x97)],
            k[C(0x74)],
            k[C(0x76)],
            k[D(0x7b)],
            k[D(0xa2)]
        ], q[C(0x7f)] = o, q[D(0x7c)] = p, q[D(0x7a)] = !![], q[C(0x9a)] = [[
                k[C(0x86)],
                k[C(0x94)]
            ]];
        const {
                count: r,
                rows: s
            } = await Message_1[C(0x93)][D(0x6c) + C(0x87)](q), t = k[D(0x6f)](r, k[C(0x8d)](p, s[C(0x83)])), u = {};
        return u[C(0x70)] = s, u[C(0x8e)] = r, u[D(0x6a)] = t, u;
    };
exports[z(0x93)] = ListScheduleService;
function a() {
    const E = [
        'XrNYG',
        'value',
        'erty',
        '../../mode',
        'hasMore',
        '1519rKzTYb',
        'findAndCou',
        '__importDe',
        'oCsAR',
        'ShuyC',
        'messages',
        '4iVZcLH',
        '692691OUgqKm',
        'lte',
        'qawEs',
        'and',
        'WoSZH',
        'sequelize',
        '41256UOdPxn',
        'fault',
        'distinct',
        'hgffA',
        'offset',
        'ls/Message',
        'push',
        'limit',
        'attributes',
        '2464022jZqYCd',
        'ticketId',
        'length',
        'where',
        'gte',
        'CbrmW',
        'ntAll',
        '5208876ORPtky',
        'createdAt',
        '__esModule',
        'status',
        '56310qTuMyl',
        'HRVKn',
        'count',
        '963222MbKCHW',
        'FaIIJ',
        'body',
        'scheduleDa',
        'default',
        'cEUNd',
        'EFFuQ',
        'CqPlZ',
        'uEgYy',
        '5xzdcCe',
        'defineProp',
        'order',
        'DESC',
        'pending',
        'userId',
        '28891820obYmuS',
        'mediaUrl',
        'between',
        'tenantId'
    ];
    a = function () {
        return E;
    };
    return a();
}