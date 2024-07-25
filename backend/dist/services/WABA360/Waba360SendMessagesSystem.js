'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0x263)) / (-0x8b2 * 0x1 + -0x4c2 + 0xd75) * (parseInt(B(0x224)) / (0x219 * 0xb + -0x1 * 0x2078 + 0x967)) + -parseInt(A(0x261)) / (0xe7f + -0xcfd + -0x17f * 0x1) + parseInt(B(0x21f)) / (0x221b * 0x1 + -0x9d6 + -0x1 * 0x1841) * (-parseInt(A(0x1f6)) / (-0x15 * 0x179 + -0x1643 + 0x3535)) + -parseInt(A(0x269)) / (-0x1db + -0x2 * 0x2b3 + 0x747) + -parseInt(A(0x240)) / (0x1c5d + -0xf4 * 0x1 + -0x2 * 0xdb1) * (parseInt(B(0x230)) / (0x13 + -0x1328 + -0xe9 * -0x15)) + parseInt(A(0x1f9)) / (0x127d + 0x9 * 0x146 + -0x1dea) * (-parseInt(A(0x243)) / (0xd54 + -0x24f0 + 0x17a6)) + parseInt(A(0x202)) / (0x9a4 * -0x1 + 0x727 + 0x8 * 0x51) * (parseInt(B(0x241)) / (0x1aad * 0x1 + 0x1 * 0x1f4b + 0x16 * -0x2a2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x19f2f + 0xbc2 * -0x25 + 0x26a0a * 0x1));
var __importDefault = this && this[C(0x219) + D(0x237)] || function (c) {
    const E = C;
    return c && c[E(0x233)] ? c : { 'default': c };
};
const m = {};
m[C(0x21a)] = !![], Object[C(0x247) + D(0x234)](exports, D(0x233), m);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2303 * -0x1 + 0x2554 + -0x4664);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(D(0x227)), SetTicketMessagesAsRead_1 = __importDefault(require(D(0x232) + D(0x25b) + D(0x203) + D(0x226))), socketEmit_1 = __importDefault(require(D(0x232) + C(0x208) + C(0x245))), Message_1 = __importDefault(require(D(0x204) + D(0x20c))), Ticket_1 = __importDefault(require(C(0x204) + C(0x218))), Whatsapp_1 = __importDefault(require(D(0x204) + D(0x1fc) + 'p')), logger_1 = require(C(0x265) + D(0x25d)), SentMessage_1 = __importDefault(require(C(0x26c) + D(0x212))), buildWabaMessage360 = async (h, i) => {
        const F = D, G = D, j = {
                'aVegN': F(0x24e),
                'TcMaX': F(0x1f7),
                'XdTuU': F(0x242),
                'gAcaz': F(0x272),
                'BnzgD': function (l, o) {
                    return l(o);
                },
                'dhFAp': G(0x1fa),
                'FCOdO': F(0x252),
                'DcgZp': function (l, o) {
                    return l === o;
                },
                'TrLbi': G(0x22e) + 'n',
                'rwOwa': F(0x209),
                'CgAKq': G(0x26d),
                'jrnwp': F(0x22f),
                'aTkYC': function (l, o) {
                    return l === o;
                },
                'AFThz': F(0x1f5),
                'YVzCH': F(0x25e),
                'NabZS': G(0x1f8),
                'JEEbP': F(0x255),
                'JnisB': G(0x210),
                'tqfJu': F(0x23a),
                'RuMQq': function (l, o) {
                    return l === o;
                },
                'PYOhw': G(0x251)
            };
        let k = {
            'timestamp': j[G(0x256)](String, h[F(0x231)]),
            'recipient_type': j[G(0x24d)],
            'to': i,
            'type': j[F(0x23d)]
        };
        if (j[F(0x221)](h[F(0x23e)], j[F(0x1fe)]) || j[F(0x221)](h[F(0x23e)], j[F(0x25a)])) {
            if (j[F(0x221)](j[F(0x239)], j[F(0x239)])) {
                const l = {};
                l['id'] = h[G(0x21d) + 'd'], l[G(0x1f3)] = h[F(0x262)] || h[G(0x20f)] || '' || '', k = {
                    ...k,
                    'type': j[F(0x25a)],
                    'document': l
                };
            } else {
                const p = {};
                p['id'] = j[G(0x21d) + 'd'], p[G(0x1f3)] = k[F(0x262)] || l[F(0x20f)] || '' || '';
                const q = { ...i };
                q[F(0x23b)] = j[G(0x25a)], q[G(0x24e)] = p, h = q;
            }
        }
        if (j[F(0x221)](h[G(0x23e)], j[F(0x225)])) {
            if (j[G(0x221)](j[G(0x214)], j[F(0x20b)])) {
                const q = {};
                q['id'] = j[F(0x21d) + 'd'], q[F(0x1f3)] = k[G(0x262)] || l[G(0x20f)] || '';
                const r = { ...i };
                r[G(0x23b)] = j[F(0x206)], r[F(0x1f7)] = q, h = r;
            } else {
                const q = {};
                q['id'] = h[F(0x21d) + 'd'], q[F(0x1f3)] = h[F(0x262)] || h[G(0x20f)] || '', k = {
                    ...k,
                    'type': j[G(0x225)],
                    'image': q
                };
            }
        }
        if (j[G(0x221)](h[G(0x23e)], j[F(0x206)])) {
            if (j[F(0x217)](j[G(0x26a)], j[F(0x244)])) {
                const s = {};
                s['id'] = j[F(0x21d) + 'd'], s[G(0x1f3)] = k[G(0x262)] || l[G(0x20f)] || '';
                const t = { ...i };
                t[G(0x23b)] = j[G(0x24c)], t[F(0x242)] = s, h = t;
            } else {
                const s = {};
                s['id'] = h[G(0x21d) + 'd'], s[F(0x1f3)] = h[F(0x262)] || h[F(0x20f)] || '', k = {
                    ...k,
                    'type': j[G(0x206)],
                    'video': s
                };
            }
        }
        if (j[G(0x217)](h[G(0x23e)], j[F(0x24c)]) || j[G(0x217)](h[G(0x23e)], j[F(0x207)])) {
            if (j[G(0x217)](j[F(0x1fd)], j[F(0x22a)])) {
                const u = {};
                u[G(0x262)] = h[F(0x262)], u = {
                    ...g,
                    'text': u
                };
            } else {
                const u = {};
                u['id'] = h[G(0x21d) + 'd'], u[F(0x1f3)] = h[F(0x262)] || h[G(0x20f)] || '', k = {
                    ...k,
                    'type': j[F(0x24c)],
                    'audio': u
                };
            }
        }
        if (j[F(0x221)](h[G(0x23e)], j[F(0x23f)]) || j[F(0x221)](h[G(0x23e)], j[G(0x23d)])) {
            if (j[G(0x246)](j[G(0x1fb)], j[G(0x1fb)])) {
                const v = {};
                v[G(0x262)] = h[F(0x262)], k = {
                    ...k,
                    'text': v
                };
            } else {
                const x = {};
                x['id'] = j[F(0x21d) + 'd'], x[G(0x1f3)] = k[G(0x262)] || l[F(0x20f)] || '', x = {
                    ...i,
                    'type': j[G(0x225)],
                    'image': x
                };
            }
        }
        return k;
    }, n = { [sequelize_1['Op']['is']]: null }, where = {
        'fromMe': !![],
        'messageId': n,
        'status': D(0x211),
        [sequelize_1['Op']['or']]: [
            { 'scheduleDate': { [sequelize_1['Op'][D(0x220)]]: new Date() } },
            { 'scheduleDate': { [sequelize_1['Op']['is']]: null } }
        ]
    }, Waba360SendMessagesSystem = async i => {
        const H = C, I = C, j = {
                'CCKLH': H(0x216),
                'Ekmda': I(0x248),
                'rXJjj': H(0x24f),
                'FoKzj': I(0x20a),
                'GfcAh': H(0x25f),
                'tUsld': I(0x254),
                'TlXyp': I(0x215),
                'lOgoB': H(0x21c),
                'dykQE': function (l, o) {
                    return l !== o;
                },
                'XPaSx': H(0x20e),
                'wSHdD': function (l, o) {
                    return l(o);
                },
                'wSnQr': H(0x252),
                'VHsUp': H(0x23a),
                'CFGtk': function (l, o, p) {
                    return l(o, p);
                },
                'VlFOZ': H(0x1f4),
                'xeFZi': H(0x236),
                'cTtSG': I(0x26e) + I(0x20d)
            }, k = await Message_1[I(0x264)][I(0x24a)]({
                'where': where,
                'include': [
                    j[I(0x257)],
                    {
                        'model': Ticket_1[H(0x264)],
                        'as': j[I(0x26b)],
                        'where': {
                            'tenantId': i[I(0x205)],
                            'channel': j[I(0x249)]
                        },
                        'include': [
                            j[H(0x257)],
                            {
                                'model': Whatsapp_1[I(0x264)],
                                'as': j[H(0x22b)],
                                'where': {
                                    'id': i['id'],
                                    'type': j[I(0x249)],
                                    'wabaBSP': j[I(0x268)]
                                }
                            }
                        ]
                    },
                    {
                        'model': Message_1[H(0x264)],
                        'as': j[H(0x270)],
                        'include': [j[H(0x257)]]
                    }
                ],
                'order': [[
                        j[I(0x258)],
                        j[I(0x238)]
                    ]]
            });
        for (const l of k) {
            if (j[H(0x24b)](j[H(0x271)], j[H(0x271)])) {
                const p = {};
                return p[I(0x264)] = j, g && h[H(0x233)] ? i : p;
            } else {
                const {ticket: p} = l, q = j[H(0x22d)](String, p[I(0x216)][H(0x260)]);
                if (![
                        j[H(0x229)],
                        j[H(0x267)]
                    ][I(0x201)](l[H(0x23e)]) && l[I(0x273)] && !l[H(0x21d) + 'd']) {
                }
                const r = await j[H(0x25c)](buildWabaMessage360, l, q), s = {};
                s[H(0x253)] = r, s[H(0x200)] = i[H(0x222)];
                const t = await (-0x1cb4 + -0x4 * -0x269 + 0x1310, SentMessage_1[I(0x264)])(s), u = { ...l };
                u[I(0x23c)] = t[H(0x213)][-0x291 * -0xf + -0x2 * 0xb99 + -0xf4d]['id'], u[H(0x21b)] = j[H(0x22c)], u[I(0x266)] = 0x2;
                const v = u, w = { ...v }, x = {};
                x['id'] = l['id'];
                const y = {};
                y[H(0x223)] = x, await Message_1[H(0x264)][I(0x235)](w, y);
                const z = {};
                z[I(0x205)] = p[H(0x205)], z[I(0x23b)] = j[H(0x26f)], z[H(0x21e)] = { ...v[I(0x228)] }, z[H(0x21e)][H(0x273)] = l[H(0x273)], z[H(0x21e)][H(0x23c)] = v[I(0x23c)], z[H(0x21e)][I(0x21b)] = j[I(0x22c)], z[H(0x21e)][I(0x266)] = 0x2, (0x1587 + -0x5 * 0x565 + 0x572, socketEmit_1[I(0x264)])(z), logger_1[H(0x259)][H(0x1ff)](j[H(0x250)]), await (-0x34 * -0x56 + 0x41 * -0xd + -0xe2b, SetTicketMessagesAsRead_1[I(0x264)])(p);
            }
        }
    };
exports[C(0x264)] = Waba360SendMessagesSystem;
function a() {
    const J = [
        'wOHhA',
        'BnzgD',
        'CCKLH',
        'TlXyp',
        'logger',
        'aVegN',
        'ers/SetTic',
        'CFGtk',
        's/logger',
        'sWyuP',
        '360',
        'number',
        '787485frELpZ',
        'body',
        '3OfIvKl',
        'default',
        '../../util',
        'ack',
        'VHsUp',
        'GfcAh',
        '1275150mwHksH',
        'AFThz',
        'Ekmda',
        './SentMess',
        'zbpPN',
        'Message\x20Up',
        'xeFZi',
        'tUsld',
        'XPaSx',
        'image',
        'mediaUrl',
        'caption',
        'sended',
        'fXIJO',
        '362485zbnNxJ',
        'video',
        'voice',
        '513uNbYWF',
        'individual',
        'PYOhw',
        'ls/Whatsap',
        'JEEbP',
        'TrLbi',
        'info',
        'apiKey',
        'includes',
        '3294808iAkhpQ',
        'ketMessage',
        '../../mode',
        'tenantId',
        'TcMaX',
        'NabZS',
        'ers/socket',
        'qZJeD',
        'whatsapp',
        'jrnwp',
        'ls/Message',
        'date\x20ok',
        'bpPEH',
        'mediaName',
        'VwKql',
        'pending',
        'age',
        'messages',
        'CgAKq',
        'createdAt',
        'contact',
        'aTkYC',
        'ls/Ticket',
        '__importDe',
        'value',
        'status',
        'ASC',
        'wabaMediaI',
        'payload',
        '4tTETcQ',
        'lte',
        'DcgZp',
        'tokenAPI',
        'where',
        '119334zQoobB',
        'gAcaz',
        'sAsRead',
        'sequelize',
        'dataValues',
        'wSnQr',
        'JnisB',
        'FoKzj',
        'VlFOZ',
        'wSHdD',
        'applicatio',
        'KAjsW',
        '8RQumxB',
        'timestamp',
        '../../help',
        '__esModule',
        'erty',
        'update',
        'chat:ack',
        'fault',
        'lOgoB',
        'rwOwa',
        'chat',
        'type',
        'messageId',
        'FCOdO',
        'mediaType',
        'tqfJu',
        '38297XZwNnp',
        '24MtqHFp',
        'audio',
        '12620OYPaRC',
        'YVzCH',
        'Emit',
        'RuMQq',
        'defineProp',
        'ticket',
        'rXJjj',
        'findAll',
        'dykQE',
        'XdTuU',
        'dhFAp',
        'document',
        'waba',
        'cTtSG',
        'CLiRg',
        'text',
        'message',
        'quotedMsg'
    ];
    a = function () {
        return J;
    };
    return a();
}