'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x1c6)) / (-0x186d + 0x131 * -0x17 + 0x33d5) + parseInt(r(0x1cc)) / (-0x1c3 * -0x5 + 0x3 * 0x407 + -0x51 * 0x42) * (parseInt(r(0x1de)) / (-0xeb1 * 0x1 + 0x2310 + -0x145c)) + parseInt(q(0x1cb)) / (0xb4 + 0x1885 + -0x1935) + -parseInt(r(0x1e9)) / (0x1afe + 0x1 * -0x227e + -0x5 * -0x181) + -parseInt(q(0x1b0)) / (0x6f9 + 0x1a8a + -0x1 * 0x217d) * (parseInt(r(0x1c7)) / (-0x1a27 * -0x1 + -0x377 * -0x4 + -0x27fc)) + parseInt(r(0x1d3)) / (0x1 * -0x6cb + -0x21e5 * 0x1 + -0x28b8 * -0x1) + -parseInt(q(0x1d4)) / (0xf78 + -0x15 * -0x169 + -0x2d0c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x457ea + 0x85464 + 0x32ab));
var __importDefault = this && this[s(0x1c2) + t(0x1b3)] || function (c) {
    const u = s;
    return c && c[u(0x1d8)] ? c : { 'default': c };
};
const k = {};
function a() {
    const x = [
        'm\x20\x22Tickets',
        '=\x22Contact\x22',
        '__importDe',
        'tickets',
        'webchatId',
        'messengerI',
        '196437oAsqEF',
        '21jSIRZH',
        '../../help',
        'userCreati',
        'ls/Contact',
        '313600XaFlxO',
        '4QlCZrv',
        'QrmDH',
        'sequelize',
        'name',
        'instagramP',
        'disabled',
        'sequelize-',
        '3361608bpejqH',
        '669762mWKmCS',
        'Url',
        'ettingsten',
        'literal',
        '__esModule',
        'default',
        'ant1',
        'deadline',
        'VYIYO',
        'number',
        '259764piHiVv',
        'ASC',
        'uBXDQ',
        'kanbanPric',
        'rMmiI',
        'commentary',
        'typescript',
        'WMslq',
        'JihGm',
        'lect\x201\x20fro',
        'QHJbu',
        '1264910FxWLkR',
        '\x22\x20as\x20\x22t\x22\x20w',
        'pPRSt',
        'AbzIK',
        'RRrXQ',
        'jkbwY',
        'NVFoL',
        'brqnS',
        'exists\x20(se',
        'defineProp',
        'and',
        'contactId\x22',
        'contact',
        'findAll',
        'profilePic',
        'erty',
        '533202rAxhnG',
        'tags',
        'ieyli',
        'fault',
        'userId',
        'value',
        'ls/Ticket',
        'here\x20\x22t\x22.\x22',
        'sSeED',
        '.id)',
        'rBYyd',
        'ls/Tag',
        '../../mode',
        'ers/CheckS',
        'BzwMf',
        'Sequelize'
    ];
    a = function () {
        return x;
    };
    return a();
}
k[t(0x1b5)] = !![], Object[s(0x1f2) + t(0x1af)](exports, s(0x1d8), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7c4 * 0x4 + 0x1 * -0x1e16 + 0x3ed4);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(t(0x1ce)), sequelize_typescript_1 = require(s(0x1d2) + s(0x1e4)), CheckSettingstenant1_1 = __importDefault(require(s(0x1c8) + s(0x1bd) + t(0x1d6) + s(0x1da))), Ticket_1 = __importDefault(require(t(0x1bc) + s(0x1b6))), Contact_1 = __importDefault(require(s(0x1bc) + s(0x1ca))), Tag_1 = __importDefault(require(t(0x1bc) + s(0x1bb))), ContactsKanbanService = async ({
        tenantId: f,
        userId: g
    }) => {
        const v = s, w = s, h = {};
        h[v(0x1dc)] = w(0x1f1) + w(0x1e7) + v(0x1c0) + w(0x1ea) + w(0x1b7) + v(0x1f4) + w(0x1c1) + v(0x1b9), h[w(0x1e6)] = w(0x1cf), h[v(0x1ef)] = w(0x1dd), h[v(0x1b8)] = v(0x1d0) + 'K', h[v(0x1ba)] = w(0x1c5) + 'd', h[w(0x1be)] = v(0x1c4), h[w(0x1b2)] = w(0x1ae) + w(0x1d5), h[v(0x1cd)] = w(0x1db), h[w(0x1ed)] = v(0x1e3), h[v(0x1e5)] = v(0x1e1) + 'e', h[v(0x1e0)] = w(0x1b1), h[w(0x1f0)] = w(0x1c3), h[w(0x1e8)] = v(0x1f5), h[w(0x1e2)] = v(0x1df), h[v(0x1eb)] = w(0x1c9) + 'on', h[w(0x1ee)] = function (o, p) {
            return o !== p;
        }, h[v(0x1ec)] = v(0x1d1);
        const i = h, j = {};
        j[w(0x1b4)] = g;
        const l = {};
        l[v(0x1b4)] = null;
        const m = await Contact_1[w(0x1d9)][w(0x1f6)]({
                'where': {
                    'tenantId': f,
                    'isGroup': ![],
                    'disableKanban': ![],
                    'id': { [sequelize_1['Op'][v(0x1f3)]]: [sequelize_typescript_1[v(0x1bf)][v(0x1d7)](i[v(0x1dc)])] }
                },
                'attributes': [
                    'id',
                    i[w(0x1e6)],
                    i[v(0x1ef)],
                    i[w(0x1b8)],
                    i[w(0x1ba)],
                    i[w(0x1be)],
                    i[w(0x1b2)],
                    i[w(0x1cd)],
                    i[w(0x1ed)],
                    i[w(0x1e5)]
                ],
                'include': [
                    {
                        'model': Tag_1[w(0x1d9)],
                        'as': i[w(0x1e0)]
                    },
                    {
                        'model': Ticket_1[w(0x1d9)],
                        'as': i[w(0x1f0)],
                        'where': {
                            [sequelize_1['Op']['or']]: [
                                j,
                                l
                            ]
                        },
                        'required': !![],
                        'include': [{
                                'model': Contact_1[v(0x1d9)],
                                'as': i[w(0x1e8)]
                            }]
                    }
                ],
                'order': [[
                        i[w(0x1e6)],
                        i[v(0x1e2)]
                    ]]
            }), n = await (0x7be * 0x2 + 0x1c7c + -0x2bf8, CheckSettingstenant1_1[v(0x1d9)])(i[v(0x1eb)]);
        if (i[w(0x1ee)](n, i[v(0x1ec)]))
            return;
        return m;
    };
exports[s(0x1d9)] = ContactsKanbanService;