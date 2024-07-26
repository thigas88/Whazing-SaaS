'use strict';
const aJ = b, aK = b;
(function (c, d) {
    const aH = b, aI = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(aH(0x1c3)) / (0x8d * -0x10 + 0x4 * -0x2bb + 0x13bd) * (-parseInt(aH(0x242)) / (-0x808 + 0x3 * -0x713 + 0x1 * 0x1d43)) + -parseInt(aI(0x1f0)) / (0x21d * -0xa + -0x1246 * 0x1 + 0x276b) + parseInt(aH(0x7d)) / (0x9c7 * -0x1 + -0x1095 * -0x2 + -0x175f) + parseInt(aI(0xc5)) / (-0x1b17 + -0x665 + -0x9 * -0x3b9) * (-parseInt(aI(0x124)) / (-0x12c6 + -0x25f0 + 0x38bc)) + -parseInt(aI(0x121)) / (0x1219 * -0x1 + -0x281 * 0x9 + 0x28a9) * (parseInt(aH(0x159)) / (-0x27f + 0x2 * -0x86f + 0x1365)) + parseInt(aI(0x15a)) / (-0x1d75 + 0x40 * -0x4c + 0x307e) + parseInt(aI(0xcd)) / (0xd97 * -0x2 + 0x1 * 0x103c + 0x13 * 0x94) * (-parseInt(aH(0x78)) / (0x21f * 0x6 + 0xc1 * 0x23 + 0xd06 * -0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x614c7 + -0xecb8f + 0x1edf65));
var __importDefault = this && this[aJ(0x26e) + aJ(0x115)] || function (c) {
    const aL = aK;
    return c && c[aL(0x1d4)] ? c : { 'default': c };
};
const aF = {};
aF[aK(0xfe)] = !![], Object[aJ(0x194) + aJ(0x152)](exports, aJ(0x1d4), aF), exports[aK(0x17e) + aK(0x226)] = exports[aK(0xc9) + aJ(0x24f)] = exports[aK(0x273) + aK(0xed)] = exports[aJ(0x12c) + aJ(0x1cd)] = exports[aJ(0xca) + aJ(0x12a) + aK(0x99)] = exports[aK(0x6e) + aJ(0x7c)] = exports[aK(0x24e) + aJ(0x179)] = void (-0x2 * 0xd83 + -0x93d * -0x1 + 0x11c9);
const CreateOrUpdateContactService_1 = __importDefault(require(aK(0x228) + aK(0x1b3) + aJ(0x284) + aK(0x20f) + aJ(0x1b3))), baileys_1 = require(aK(0x81) + aK(0x7a) + aJ(0x261)), Ticket_1 = __importDefault(require(aJ(0x82) + aJ(0xf9) + 'et')), CreateMessageService_1 = __importDefault(require(aJ(0x1ba) + aK(0x125) + aK(0x187) + aK(0xa1) + 'ce')), util_1 = require(aJ(0x200)), fs_1 = require('fs'), fs_2 = __importDefault(require('fs')), fluent_ffmpeg_1 = __importDefault(require(aJ(0x17d) + aJ(0x26a))), path_1 = require(aK(0x13a)), logger_1 = require(aJ(0x21d) + aK(0x164) + 'r'), Message_1 = __importDefault(require(aK(0x82) + aK(0x133) + aK(0x130))), MakeRandomId_1 = require(aK(0x22d) + aK(0x201) + aK(0x1f7)), writeFileAsync = (-0x9ab + -0x1 * 0xc0a + 0x1 * 0x15b5, util_1[aK(0xd5)])(fs_1[aK(0x27f)]);
fluent_ffmpeg_1[aK(0x230)][aJ(0x14b) + aK(0x1c2)](aK(0x234) + aJ(0x15b));
const VerifyContactBaileys = async (c, d, e, f = ![], g = undefined) => {
    const aM = aK, aN = aJ, h = {
            'pvFRV': aM(0x111) + aM(0xdf),
            'mQCKt': aN(0x260) + 'ge',
            'SYHlk': function (n, o) {
                return n === o;
            },
            'BCrRH': aN(0x1b9),
            'uBUxW': function (n, o) {
                return n !== o;
            },
            'JysnX': aN(0x129),
            'sleYI': aN(0x218),
            'LQUpc': aN(0x1c8),
            'XuJHq': function (n, o) {
                return n === o;
            },
            'anSmU': aM(0x19d),
            'ZakIN': aM(0x1df),
            'uEdkQ': aM(0x1a3),
            'zvjUL': aM(0x1e6),
            'NumrR': function (n, o) {
                return n(o);
            }
        };
    let i = '', j = '', k = '';
    if (f)
        h[aM(0x245)](h[aM(0x288)], h[aM(0x288)]) ? (i = g[aN(0x282)], k = g[aN(0x282)], j = g['id'][aN(0x243)]('@')[0x2009 + 0x15f5 + -0x2 * 0x1aff]) : e += '\x0a\x0a' + f[aN(0x144)];
    else {
        if (h[aN(0x118)](h[aM(0x8e)], h[aN(0x8e)])) {
            let p = g[aN(0x13f)]?.[aN(0xc6) + aN(0xdf)]?.[aN(0x13f)][aN(0x1a9) + 'e'];
            h = '*' + p[aN(0x154) + 'n'] + '*';
            for (const q of p?.[aN(0x16e)][-0xa05 + -0xa1c + 0x1421]?.[aN(0x278)]) {
                l += '\x0a\x0a' + q[aN(0x144)];
            }
            return j;
        } else {
            c[aN(0x1f2)][aN(0x147) + 't'] ? h[aM(0x118)](h[aM(0x24b)], h[aN(0xac)]) ? j = c[aM(0x1f2)][aM(0x147) + 't']?.[aN(0x243)]('@')[0x1d41 + 0x17ea * -0x1 + -0x557] : d = h[aM(0x9b)] : h[aN(0x231)](h[aM(0x269)], h[aM(0x145)]) ? e[aM(0x252)][aM(0x251)](f) : j = c[aN(0x1f2)][aM(0x1de)]?.[aN(0x243)]('@')[-0x2604 + -0x2301 + 0x4905 * 0x1];
            if (c[aN(0x1f2)][aN(0xfd)])
                h[aN(0x231)](h[aM(0x12e)], h[aN(0x12e)]) ? (i = j, k = j) : d = h[aN(0x202)];
            else {
                if (h[aN(0x245)](h[aN(0x274)], h[aM(0x274)]))
                    i = c[aN(0xa5)], k = c[aN(0xa5)];
                else {
                    const t = {};
                    return t[aN(0x230)] = j, g && h[aN(0x1d4)] ? i : t;
                }
            }
        }
    }
    const l = {
            'name': i,
            'number': j,
            'profilePicUrl': e,
            'tenantId': h[aN(0x12d)](Number, d),
            'pushname': k,
            'isUser': ![],
            'isWAContact': ![],
            'isGroup': f
        }, m = await (0x7 * 0x68 + 0x35 * 0xa2 + -0x2462, CreateOrUpdateContactService_1[aN(0x230)])(l);
    return m;
};
exports[aK(0x24e) + aJ(0x179)] = VerifyContactBaileys;
const VerifyMessageBaileys = async (d, e, f, g) => {
    const aO = aJ, aP = aK, h = {
            'VdvtK': function (m, n) {
                return m(n);
            },
            'huzXA': function (m, n) {
                return m(n);
            },
            'uRrtk': aO(0x1d2),
            'ZFcnJ': function (m, n) {
                return m(n);
            },
            'DYVeb': function (m, n) {
                return m || n;
            }
        }, i = await (-0xb07 * -0x2 + 0x17ec + -0x932 * 0x5, exports[aO(0x273) + aP(0xed)])(d), j = await (0x4 * -0x1d + 0x13cd * 0x1 + -0x1359, exports[aP(0xc9) + aO(0x24f)])(d), k = {
            'messageId': h[aP(0x1ea)](String, d[aO(0x1f2)]['id']),
            'ticketId': f['id'],
            'contactId': e ? undefined : g['id'],
            'body': h[aP(0x1ea)](String, j),
            'fromMe': e,
            'read': e,
            'mediaType': h[aO(0x14c)](getTypeMessage, d),
            'quotedMsgId': i?.['id'],
            'timestamp': new Date()[aP(0xd0)](),
            'status': h[aP(0x1dc)],
            'dataJson': JSON[aO(0x25d)](d)
        };
    await f[aO(0xa6)]({
        'lastMessage': h[aO(0x239)](String, j),
        'lastMessageAt': new Date()[aO(0xd0)](),
        'answered': h[aO(0x1ad)](e, ![])
    });
    const l = {};
    l[aP(0x12f) + 'a'] = k, l[aO(0x192)] = f[aO(0x192)], await (-0xc69 + 0x15e1 + -0x978, CreateMessageService_1[aP(0x230)])(l);
};
function a() {
    const bF = [
        '\x20-\x20',
        'bsbDd',
        'eECwJ',
        'vuzeb',
        'protocolMe',
        'Jtlmp',
        'join',
        'tiLXe',
        'fault',
        'Filrq',
        'ELtiy',
        'uBUxW',
        './public/',
        'bLcjF',
        'LQeSW',
        'itude',
        'miDBA',
        '\x20em\x20getBod',
        'ttonReplyM',
        'CliZE',
        '271362sUmJko',
        'templateBu',
        'uipqI',
        '348ARBIfM',
        'ageService',
        'lqiDj',
        'MUOlm',
        '\x20erro:',
        'PXUoY',
        'aMessageBa',
        'netbd',
        'verifyDele',
        'NumrR',
        'uEdkQ',
        'messageDat',
        'age',
        'cMofV',
        'BHQbv',
        'odels/Mess',
        'contextInf',
        'GSfGO',
        'AjPMh',
        'warn',
        'essage\x20-->',
        'eEyyY',
        'path',
        'NFD',
        'EiDiJ',
        'JBJfa',
        '/png;base6',
        'message',
        'tnkSq',
        'VmeWU',
        'zmTGq',
        'contentTex',
        'title',
        'ZakIN',
        'oMJwN',
        'participan',
        'WZgjf',
        'normalize',
        'FyjyI',
        'setFfmpegP',
        'huzXA',
        'juzrt',
        'jXEFh',
        'RzsdD',
        'QhSwd',
        'ppwpi',
        'erty',
        'selectedRo',
        'descriptio',
        't-BR|',
        'tzWQM',
        'mp3',
        'YYyEg',
        '56WAHgdN',
        '3150684MXBQSL',
        'fmpeg',
        'FhnLC',
        'xlcQC',
        'toString',
        'MLvRk',
        'nRckY',
        'log',
        'wId',
        'mBvge',
        'tils/logge',
        'Yxhup',
        'itrLd',
        'Áudio',
        'seMessage',
        'documentWi',
        'templateMe',
        'sxZSH',
        'ngHnH',
        'Dbqmi',
        'sections',
        'kTNum',
        'BcZoe',
        'getContent',
        'concat',
        'pop',
        'iGyBN',
        'mDeeo',
        'AkifN',
        'PKrnC',
        'jWuAl',
        'actBaileys',
        'mbDFE',
        'vyzja',
        'QZrsa',
        'fluent-ffm',
        'getQuotedM',
        '&z=17&hl=p',
        'model',
        'QFHeu',
        'iCDgB',
        'bGkps',
        'ywXri',
        'LoQkk',
        'status',
        's/CreateMe',
        'Ocorreu\x20um',
        'CUNqe',
        'JVRyI',
        'Tentativa\x20',
        'TgQOh',
        'sdfFn',
        'UVLYH',
        'gzNUB',
        'PdqYF',
        'data',
        'tenantId',
        'ElfgN',
        'defineProp',
        'liveLocati',
        'odgaQ',
        'IErNU',
        '.ogg',
        'MTkbB',
        'Nlhwd',
        '\x20o\x20arquivo',
        'YVocn',
        'ptGFs',
        'cmASi',
        'XHkkr',
        'TydVh',
        'ynppY',
        'ttonId',
        'pusDX',
        'ocfHT',
        'jbKRx',
        'PwFQh',
        'messageId',
        'VzBmk',
        'listMessag',
        'cWWwX',
        'selectedId',
        'extendedTe',
        'DYVeb',
        'oeipv',
        'oywMm',
        'iWKlt',
        'interactiv',
        'CqjSM',
        'actService',
        'wsugu',
        'JyCSc',
        'ymLHG',
        'ckJlU',
        'findByPk',
        'aCryz',
        '../../Mess',
        'kqxxR',
        'vmkam',
        'quotedMess',
        '4,\x20',
        'gdavQ',
        'Nlrdb',
        'mZSWg',
        'ath',
        '159sRtYkb',
        'uQBTQ',
        'gscIx',
        'krnaT',
        'fXoEX',
        'ECtGh',
        'ephemeralM',
        'fMrJz',
        'ctReply',
        'videoMessa',
        'teMessage',
        'essage',
        'pOBaf',
        'DFdtw',
        'plate',
        'received',
        'LMLAH',
        '__esModule',
        'jiuPQ',
        'dcGOz',
        'mJHLD',
        'trim',
        'xtMessage',
        'listRespon',
        'yMessage:\x20',
        'uRrtk',
        'UQPFt',
        'remoteJid',
        'omNXK',
        'selectedBu',
        'mHDxp',
        'thCaptionM',
        'vFlaZ',
        '\x20|\x20https:/',
        'PBoPb',
        'RdbHl',
        'mimetype',
        'Thqks',
        'dRjxr',
        'VdvtK',
        'gzWhg',
        'HyUOx',
        'GtVWE',
        'buttons',
        'FgjRg',
        '2016474ZEjyPR',
        'oUPTM',
        'key',
        'SrEVs',
        'text',
        'esRiS',
        'TuUDT',
        'eRandomId',
        'Fctep',
        'slice',
        'findOne',
        'toFormat',
        'bzCuE',
        'ZpoYm',
        'HXpTS',
        'OWNLOAD_ME',
        'util',
        'elpers/Mak',
        'mQCKt',
        'hdQLf',
        'IbkkB',
        'cmVmO',
        'fXqOk',
        'wrHIC',
        'save',
        'SvRDr',
        'where',
        'from',
        'ERR_WAPP_D',
        'replace',
        'jESEQ',
        'UpdateCont',
        'cRPty',
        'XksdN',
        'end',
        'WxTxP',
        'endsWith',
        'cJPWj',
        'eQfBE',
        'editedMess',
        'wCgof',
        'degreesLat',
        'WfmQD',
        'include',
        'pVHAH',
        '../../../u',
        'locationMe',
        'HQsMp',
        'EOyux',
        'fourRowTem',
        'UpHXw',
        'qlvuS',
        'ntentFromM',
        'odlCV',
        'essageId',
        'dqZzs',
        '../../Cont',
        'eCrwk',
        'WwTZA',
        'data:image',
        'extractMes',
        '../../../h',
        'ail',
        'Não\x20encont',
        'default',
        'XuJHq',
        'vBeOE',
        'makeRandom',
        '/usr/bin/f',
        'utYLw',
        'yiXyh',
        'ZiQpr',
        '/maps.goog',
        'ZFcnJ',
        'jVqDa',
        'base64',
        's?q=',
        'pIgCD',
        'sageConten',
        'eamYV',
        'ceBKG',
        'contactMes',
        '7284sRpgtl',
        'split',
        'dqEzv',
        'SYHlk',
        'KjVlh',
        'FEQFG',
        'IQHaC',
        '%2C',
        'rnWlV',
        'sleYI',
        'tIMaV',
        'audioMessa',
        'VerifyCont',
        'sage',
        'USzcf',
        'error',
        'logger',
        'gMzOb',
        'ESROQ',
        'ZpCpW',
        'SmfKH',
        'fbyHh',
        'TLVnt',
        'conversati',
        'hydratedTe',
        'oTLYZ',
        'BkrjY',
        'stringify',
        'essage\x20->\x20',
        'aaBdY',
        'imageMessa',
        'eys',
        'MFEdy',
        'ponseMessa',
        'dRmSm',
        'vVjIR',
        'RDSlh',
        'DUqIB',
        'hydratedFo',
        'anSmU',
        'peg',
        'OZuPc',
        'CDdKf',
        'tgEVW',
        '__importDe',
        'Get\x20Type\x20M',
        'BSveW',
        'CvHCd',
        'wuHkG',
        'verifyQuot',
        'zvjUL',
        'lastMessag',
        'xoiuu',
        'document',
        'rows',
        'xbJiv',
        'find',
        'JsQJe',
        'iYxLI',
        'buttonText',
        'wdWfA',
        'writeFile',
        'KTIUL',
        'iqriV',
        'subject',
        'ntBBP',
        's/CreateOr',
        'frnPZ',
        'xqRXz',
        'INeik',
        'BCrRH',
        'rou\x20o\x20tipo',
        'unlinkSync',
        'jpegThumbn',
        'ECihG',
        'VKCsV',
        'hjneE',
        'hFLlV',
        'VerifyMess',
        'FxLIB',
        'catch',
        'rjEWK',
        'JGgRT',
        'Lyfjc',
        'qrmaB',
        'oMEuB',
        'cTDmi',
        'anfxz',
        '209869JSswSI',
        'YGYeu',
        'ckets/bail',
        'sxjhW',
        'ageBaileys',
        '4502832NWYXBr',
        'eMessage',
        'MVhlN',
        'savkN',
        '@whiskeyso',
        '../../../m',
        'XwSmO',
        'AQmSp',
        'LHHUa',
        'Xzczs',
        'isDeleted',
        'forEach',
        '.mp3',
        'TgVlo',
        'type',
        'pBGnm',
        'public',
        'JysnX',
        'nEKhm',
        'tuffz',
        'documentMe',
        'qWXpR',
        'applicatio',
        'LpDLT',
        'onMessage',
        'mplate',
        'jjOtM',
        'vcard',
        'ileys',
        'gecmQ',
        'pvFRV',
        'RwBnY',
        'aXGMS',
        'singleSele',
        'DUcaU',
        'stanzaId',
        'ssageServi',
        'reactionMe',
        'LRoXN',
        'Get\x20Body\x20M',
        'pushName',
        'update',
        'zPcVk',
        'iQIgA',
        'gFyLC',
        '>>>>\x20erro\x20',
        'OkEtR',
        'LQUpc',
        'QCrIY',
        'WDSPN',
        'jolRZ',
        'tatos',
        'ZQDVQ',
        'IylOt',
        'then',
        'NjDWY',
        'HaIxB',
        'yRTtf',
        'ArlTh',
        'next',
        'values',
        'gitude',
        'fileName',
        '\x20de\x20baixar',
        'fZvNj',
        'degreesLon',
        'caption',
        'kNdRO',
        'gHaWs',
        'ZtCgI',
        'yWLQE',
        'mLdiQ',
        '4790hvCdAQ',
        'viewOnceMe',
        'vQrUN',
        'wAcBu',
        'getBodyMes',
        'VerifyMedi',
        'ABRvb',
        'hcRRV',
        '210PKuWGy',
        'aRGvl',
        'fENGQ',
        'getTime',
        'LbfPZ',
        'downloadCo',
        'TSquP',
        'KVzbe',
        'promisify',
        'LdXBw',
        'QkPPR',
        'filename',
        'GXbRF',
        'Type',
        'lsxrR',
        'buttonsMes',
        'header',
        'IGnAP',
        'ssage',
        'DIA',
        'rYLgs',
        'qNBXR',
        'omcdG',
        'mvWum',
        'dICCq',
        'displayTex',
        'Dckds',
        'WxkpG',
        'EJIqP',
        'GehHu',
        'uuFfu',
        'SDAhK',
        'edMessage',
        'keys',
        'stickerMes',
        'varios\x20con',
        'NrkQu',
        'DCqLr',
        'NwgHB',
        'FmnSa',
        'PdiTC',
        'bfcOF',
        'urRowTempl',
        'aKQku',
        'odels/Tick',
        'pXoBx',
        'ZAmia',
        'nbZNr',
        'fromMe',
        'value',
        'eDZmD',
        'epuGO',
        'ovXJW',
        'MVWWg',
        'sjePC',
        'waLpy',
        'le.com/map',
        'buttonsRes',
        'ZNBSH',
        'ate',
        'nxPBa',
        'sMsaP',
        'qRoeL',
        'URffN'
    ];
    a = function () {
        return bF;
    };
    return a();
}
exports[aK(0x6e) + aJ(0x7c)] = VerifyMessageBaileys;
const VerifyMediaMessageBaileys = async (e, f, g) => {
    const aQ = aJ, aR = aJ, h = {
            'VKCsV': aQ(0xef) + aQ(0x24f),
            'hcRRV': function (j) {
                return j();
            },
            'vBeOE': function (j) {
                return j();
            },
            'netbd': function (j, k) {
                return j(k);
            },
            'IQHaC': aR(0x157),
            'hjneE': aQ(0x212),
            'gzWhg': aR(0x251),
            'KVzbe': function (j, k) {
                return j !== k;
            },
            'jESEQ': aQ(0x6d),
            'cJPWj': aR(0xae),
            'GXbRF': aR(0xc7),
            'GehHu': aQ(0x17a),
            'OZuPc': aR(0x272),
            'ceBKG': aQ(0x24c),
            'FmnSa': function (j, k) {
                return j(k);
            },
            'cmVmO': aQ(0x20c) + aR(0x1ff) + aR(0xe0),
            'LpDLT': function (j, k) {
                return j !== k;
            },
            'dqZzs': aR(0xb1),
            'dqEzv': aQ(0x101),
            'wAcBu': aQ(0x198),
            'oywMm': function (j, k) {
                return j !== k;
            },
            'gscIx': aQ(0x235),
            'ZpoYm': aQ(0x1f6),
            'SmfKH': aR(0x89),
            'FEQFG': function (j, k) {
                return j === k;
            },
            'MLvRk': aR(0x17c),
            'rnWlV': aQ(0x285),
            'bLcjF': aR(0x1a9) + 'e',
            'wdWfA': aQ(0xdc) + aQ(0x24f),
            'RDSlh': aQ(0xc4),
            'Yxhup': function (j, k) {
                return j === k;
            },
            'WfmQD': aR(0x19c),
            'MVhlN': aR(0x1ef),
            'CDdKf': aR(0x188) + aQ(0x128),
            'fZvNj': function (j, k) {
                return j !== k;
            },
            'savkN': aQ(0xc0),
            'LHHUa': aQ(0x90),
            'Filrq': aQ(0x91) + aQ(0xdf),
            'FyjyI': function (j, k) {
                return j !== k;
            },
            'uipqI': aR(0x19e),
            'ESROQ': function (j, k) {
                return j === k;
            },
            'Nlhwd': function (j, k) {
                return j === k;
            },
            'AjPMh': aQ(0xe8),
            'UQPFt': aQ(0x9a),
            'aKQku': aQ(0x253),
            'pBGnm': aQ(0x185),
            'krnaT': aR(0x16b),
            'lsxrR': aQ(0x13b),
            'kqxxR': aQ(0x146),
            'bGkps': aR(0x199),
            'jWuAl': function (j, k, l, m) {
                return j(k, l, m);
            },
            'eDZmD': aR(0x8d),
            'ZtCgI': aR(0x23b),
            'PdqYF': function (j, k) {
                return j === k;
            },
            'SvRDr': aR(0x170),
            'iqriV': function (j, k) {
                return j(k);
            },
            'NjDWY': function (j, k) {
                return j !== k;
            },
            'fMrJz': aR(0x27c)
        }, i = await (-0x8b * 0x2c + 0xc1 * 0x11 + -0x13b * -0x9, exports[aR(0x273) + aQ(0xed)])(e);
    try {
        if (h[aR(0x14a)](h[aQ(0x123)], h[aR(0x123)]))
            d = h[aQ(0x6b)];
        else {
            const k = await h[aQ(0xf4)](downloadMedia, e);
            if (h[aR(0x254)](k[aQ(0x191)], h[aQ(0x1eb)])) {
                if (h[aQ(0x19a)](h[aR(0x136)], h[aQ(0x136)]))
                    throw new Error(h[aQ(0x205)]);
                else
                    return q?.[aR(0x13f)]?.[aQ(0x217) + aR(0x130)]?.[aQ(0x13f)]?.[aR(0x111) + aR(0xdf)]?.[aQ(0x217) + aR(0x130)]?.[aQ(0x1ac) + aQ(0x1d9)]?.[aR(0x1f4)];
            }
            if (!k) {
                if (h[aR(0x165)](h[aR(0x1dd)], h[aQ(0xf8)]))
                    h[aR(0xcc)](q);
                else
                    throw new Error(h[aR(0x205)]);
            }
            if (!k[aR(0xd8)]) {
                if (h[aR(0x247)](h[aQ(0x8c)], h[aQ(0x8c)])) {
                    const t = k[aQ(0x1e7)][aQ(0x243)]('/')[-0x5d0 * 0x5 + 0x6 * 0x272 + 0xe65][aR(0x243)](';')[-0x10a3 * -0x1 + 0x1f5f + -0x3002];
                    k[aQ(0xd8)] = new Date()[aQ(0xd0)]() + '.' + t;
                } else
                    g[aQ(0x230)][aR(0x68)](h), i[aR(0xd8)] = j[aQ(0x243)]('/')[aR(0x173)]();
            } else {
                if (h[aQ(0x14a)](h[aQ(0x1c6)], h[aR(0x1c6)]))
                    e[aR(0x252)][aR(0x251)](f);
                else {
                    const w = k[aR(0xd8)][aR(0x243)]('.')[aQ(0x173)](), x = k[aQ(0xd8)][aR(0x243)]('.')[aQ(0x1f9)](0x40 * 0x29 + 0x4a * 0x72 + -0x2b34, -(-0xeaf + -0x1271 + -0x21 * -0x101))[aQ(0x113)]('.')[aQ(0x20d)](/\s/g, '_')[aR(0x149)](h[aQ(0xdb)])[aQ(0x20d)](/[\u0300-\u036f]/g, '');
                    k[aQ(0xd8)] = x[aQ(0x1d8)]() + '_' + new Date()[aR(0xd0)]() + '.' + w;
                }
            }
            const l = aR(0x119) + k[aR(0xd8)];
            let m;
            try {
                if (h[aR(0x254)](h[aQ(0x1bb)], h[aQ(0x183)])) {
                    const z = {
                        'zPcVk': function (A, B) {
                            const aS = aR;
                            return h[aS(0x12b)](A, B);
                        }
                    };
                    (-0x2 * 0x2c5 + -0x1 * -0x2291 + -0x1 * 0x1d07, h[aQ(0x230)])(i)[aQ(0x1fb)](h[aQ(0x248)])[aQ(0x208)](j)['on'](h[aQ(0x6c)], () => {
                        const aT = aR;
                        h[aT(0x232)](m);
                    })['on'](h[aQ(0x1eb)], A => {
                        const aU = aQ;
                        z[aU(0xa7)](m, A);
                    });
                } else
                    await h[aR(0x178)](writeFileAsync, (-0x1 * 0x287 + 0x2241 + 0x2 * -0xfdd, path_1[aR(0x113)])(__dirname, '..', '..', '..', '..', h[aR(0xff)], k[aQ(0xd8)]), k[aQ(0x191)], h[aQ(0xc2)])[aQ(0xb3)](() => {
                        const aW = aQ, aX = aR, z = {
                                'tnkSq': function (A, B) {
                                    const aV = b;
                                    return h[aV(0xd4)](A, B);
                                },
                                'fbyHh': h[aW(0xd9)],
                                'iQIgA': h[aX(0xea)],
                                'QhSwd': function (A) {
                                    const aY = aX;
                                    return h[aY(0xcc)](A);
                                },
                                'CliZE': h[aW(0x26b)],
                                'wsugu': h[aW(0x240)],
                                'NwgHB': function (A, B) {
                                    const aZ = aW;
                                    return h[aZ(0xf4)](A, B);
                                },
                                'fENGQ': h[aX(0x205)]
                            };
                        if (h[aX(0x94)](h[aX(0x227)], h[aW(0x244)])) {
                            if (l[aW(0x214)](h[aX(0xc8)]))
                                h[aW(0x1af)](h[aX(0x1c5)], h[aX(0x1fd)]) ? m = l[aX(0x20d)](h[aW(0xc8)], h[aW(0x256)]) : g[aX(0x252)][aX(0x137)](aX(0x22f) + aX(0x289) + aX(0x11e) + aW(0x1db) + h + aW(0x10d) + i[aX(0x25d)](j?.[aW(0x13f)]));
                            else {
                                if (h[aW(0x247)](h[aX(0x15f)], h[aW(0x24a)])) {
                                    let C = '*' + e?.[aW(0x13f)]?.[aW(0xc6) + aX(0xdf)]?.[aW(0x13f)]?.[aX(0xdc) + aX(0x24f)]?.[aX(0x143) + 't'] + '*';
                                    return f[aW(0x13f)]?.[aW(0xc6) + aX(0xdf)]?.[aW(0x13f)]?.[aW(0xdc) + aX(0x24f)]?.[aW(0x1ee)][aX(0x88)](D => {
                                        const b0 = aX, b1 = aW;
                                        C += '\x0a\x0a' + D[b0(0x27d)]?.[b1(0xe6) + 't'];
                                    }), C;
                                } else
                                    return;
                            }
                            return new Promise((C, D) => {
                                const b2 = aX, b3 = aW;
                                h[b2(0xd4)](h[b2(0x20e)], h[b2(0x215)]) ? (0x1f0b + -0x59e * -0x1 + -0x24a9, fluent_ffmpeg_1[b2(0x230)])(l)[b2(0x1fb)](h[b2(0x248)])[b2(0x208)](m)['on'](h[b2(0x6c)], () => {
                                    const b4 = b2, b5 = b3;
                                    z[b4(0x140)](z[b5(0x257)], z[b4(0xa8)]) ? z[b4(0x150)](C) : (g = h[b4(0xa5)], i = j[b4(0xa5)]);
                                })['on'](h[b2(0x1eb)], E => {
                                    const b6 = b3, b7 = b2;
                                    z[b6(0x140)](z[b6(0x120)], z[b7(0x1b4)]) ? z[b7(0xf3)](D, E) : g = h[b7(0x172)]([
                                        i,
                                        j
                                    ]);
                                }) : f = (-0x1b20 + 0x942 + 0x11de, g[b2(0x171) + b2(0xda)])(h?.[b3(0x13f)]?.[b2(0xc6) + b2(0xdf)]?.[b2(0x13f)]);
                            });
                        } else
                            throw new q(z[aW(0xcf)]);
                    })[aR(0xb3)](() => {
                        const b8 = aQ, b9 = aQ;
                        h[b8(0x1af)](h[b9(0x266)], h[b9(0x266)]) ? (k?.[b9(0x13f)]?.[b9(0xc6) + b9(0xdf)]?.[b9(0x13f)]?.[b8(0x1a9) + 'e'] && (s = h[b8(0x11a)]), m?.[b9(0x13f)]?.[b9(0xc6) + b8(0xdf)]?.[b8(0x13f)]?.[b9(0xdc) + b8(0x24f)] && (t = h[b8(0x27e)]), o?.[b9(0x13f)]?.[b8(0xc6) + b8(0xdf)]?.[b9(0x13f)] && (u = (0x1bd1 * -0x1 + -0x9 * -0x3fe + -0x43 * 0x1f, v[b8(0x171) + b8(0xda)])(w?.[b9(0x13f)]?.[b8(0xc6) + b9(0xdf)]?.[b8(0x13f)]))) : m && (h[b8(0x165)](h[b9(0x21a)], h[b9(0x7f)]) ? q = h[b8(0x27e)] : (fs_2[b8(0x230)][b8(0x68)](l), k[b9(0xd8)] = m[b9(0x243)]('/')[b8(0x173)]()));
                    })[aQ(0x70)](z => {
                        const ba = aQ, bb = aQ;
                        h[ba(0xbd)](h[ba(0x80)], h[bb(0x85)]) ? console[bb(0x251)](h[ba(0x26c)], z) : e[ba(0x251)](h[ba(0x26c)], f);
                    });
            } catch (z) {
                h[aR(0x190)](h[aQ(0x209)], h[aQ(0x209)]) ? logger_1[aR(0x252)][aQ(0x251)](z) : q = h[aR(0x116)];
            }
            const n = await (0x18b5 + 0x717 + -0x4 * 0x7f3, exports[aR(0xc9) + aQ(0x24f)])(e), o = {
                    'messageId': h[aR(0x281)](String, e[aQ(0x1f2)]['id']),
                    'ticketId': f['id'],
                    'contactId': e[aQ(0x1f2)][aR(0xfd)] ? undefined : g['id'],
                    'body': n,
                    'fromMe': !!e[aQ(0x1f2)][aQ(0xfd)],
                    'read': !!e[aR(0x1f2)][aQ(0xfd)],
                    'quotedMsgId': i?.['id'],
                    'ack': e[aQ(0x186)],
                    'mediaUrl': k[aR(0xd8)],
                    'dataJson': JSON[aQ(0x25d)](e),
                    'mediaType': k[aQ(0x1e7)][aR(0x243)]('/')[-0x1 * -0x1b65 + 0x143f + -0x2fa4]
                }, p = {};
            p[aR(0x275) + 'e'] = n, await f[aR(0xa6)](p);
            const q = {};
            q[aQ(0x12f) + 'a'] = o, q[aQ(0x192)] = f[aQ(0x192)], await (-0xa * 0x359 + 0x2 * -0x985 + -0x1 * -0x3484, CreateMessageService_1[aQ(0x230)])(q);
        }
    } catch (B) {
        if (h[aR(0xb4)](h[aQ(0x1ca)], h[aR(0x1ca)])) {
            const D = (-0x751 + -0xd47 + 0x293 * 0x8, i[aQ(0x22c) + aR(0x23e) + 't'])(j[aR(0x13f)])[k[aR(0xee)](l?.[aQ(0x13f)])[aR(0xb9)]()[aQ(0xb8)]()[aQ(0xfe)]];
            let E = m?.[aQ(0x13f)]?.[aQ(0xa2) + aQ(0xdf)] ? n?.[aQ(0x13f)]?.[aQ(0xa2) + aR(0xdf)]?.[aR(0x1f2)]?.['id'] : '';
            return E ? E : D?.[aQ(0x134) + 'o']?.[aQ(0xa0)];
        } else
            logger_1[aR(0x252)][aR(0x251)](B);
    }
};
exports[aJ(0xca) + aJ(0x12a) + aJ(0x99)] = VerifyMediaMessageBaileys;
const verifyDeleteMessage = async (f, g) => {
    const bc = aJ, bd = aK, h = {};
    h[bc(0x180)] = Ticket_1[bc(0x230)];
    const i = {};
    i[bc(0x21b)] = [h];
    const j = await Message_1[bc(0x230)][bd(0x1b8)](f[bc(0x1f2)]['id'], i), k = {};
    k[bc(0x87)] = !![], await j[bc(0xa6)](k);
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x510 * -0x5 + 0x1 * -0x1a + 0x52a * 0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[aJ(0x12c) + aJ(0x1cd)] = verifyDeleteMessage;
const verifyQuotedMessage = async e => {
    const be = aJ, bf = aJ;
    if (!e)
        return null;
    const f = (0x5a7 + -0x85 * 0x21 + 0xb7e, exports[be(0x17e) + be(0x226)])(e);
    if (!f)
        return null;
    const g = {};
    g[bf(0x1a7)] = f;
    const h = {};
    h[be(0x20a)] = g;
    const i = await Message_1[bf(0x230)][be(0x1fa)](h);
    if (!i)
        return null;
    return i;
};
exports[aJ(0x273) + aJ(0xed)] = verifyQuotedMessage;
const downloadMedia = async f => {
        const bg = aJ, bh = aK, g = {};
        g[bg(0xe4)] = bh(0x251), g[bg(0x18e)] = bg(0x24d) + 'ge', g[bh(0x184)] = bh(0x21e) + bg(0xdf), g[bg(0xce)] = bh(0x93) + 'n', g[bg(0x216)] = bh(0x277), g[bg(0x1a6)] = function (q, r) {
            return q === r;
        }, g[bg(0x1ed)] = bg(0xad), g[bg(0x1b6)] = function (q, r) {
            return q < r;
        }, g[bh(0xaf)] = function (q, r) {
            return q !== r;
        }, g[bg(0x21f)] = bg(0x22a), g[bg(0x131)] = bg(0x141), g[bh(0x76)] = function (q, r) {
            return q > r;
        }, g[bh(0x1e3)] = bh(0x1b7), g[bh(0xa3)] = function (q, r) {
            return q !== r;
        }, g[bg(0x11b)] = bg(0x1a0), g[bg(0x1b0)] = function (q, r) {
            return q === r;
        }, g[bg(0x1d0)] = bg(0xfa), g[bg(0xcb)] = bh(0x25b), g[bh(0xd1)] = function (q, r) {
            return q === r;
        }, g[bg(0x151)] = bg(0xb6), g[bh(0x74)] = bg(0xeb), g[bh(0x71)] = bg(0x20c) + bh(0x1ff) + bh(0xe0), g[bh(0x10e)] = function (q, r) {
            return q === r;
        }, g[bg(0x23d)] = bg(0x1ae), g[bg(0x246)] = bg(0x229), g[bh(0x270)] = bg(0xc1);
        const h = g, i = f[bg(0x13f)]?.[bh(0x260) + 'ge'] || f[bg(0x13f)]?.[bg(0x24d) + 'ge'] || f[bg(0x13f)]?.[bg(0x1cc) + 'ge'] || f[bh(0x13f)]?.[bg(0xef) + bh(0x24f)] || f[bg(0x13f)]?.[bh(0x91) + bh(0xdf)] || f[bg(0x13f)]?.[bh(0x169) + bh(0x1e2) + bh(0x1ce)]?.[bh(0x13f)]?.[bg(0x91) + bg(0xdf)] || f[bg(0x13f)]?.[bg(0x1ac) + bh(0x1d9)]?.[bg(0x134) + 'o']?.[bg(0x1bd) + bg(0x130)]?.[bh(0x260) + 'ge'] || f[bh(0x13f)]?.[bg(0x1ac) + bg(0x1d9)]?.[bh(0x134) + 'o']?.[bg(0x1bd) + bg(0x130)]?.[bg(0x1cc) + 'ge'];
        let j = i[bh(0x1e7)][bg(0x243)]('/')[-0x5 * 0x31e + 0x14 * -0xf + 0x10c2][bg(0x20d)](h[bg(0xce)], h[bg(0x216)]) ? i[bh(0x1e7)][bg(0x243)]('/')[-0x4 * 0x454 + -0x1 * 0x2699 + 0xd * 0x44d][bh(0x20d)](h[bg(0xce)], h[bg(0x216)]) : i[bh(0x1e7)][bh(0x243)]('/')[-0x16ca + -0x5e7 * -0x1 + 0x1 * 0x10e3], k, l = -0x739 + -0x1047 + 0x1780;
        if (f[bg(0x13f)]?.[bg(0x91) + bg(0xdf)] || f[bh(0x13f)]?.[bg(0x169) + bg(0x1e2) + bg(0x1ce)]) {
            if (h[bh(0x1a6)](h[bh(0x1ed)], h[bh(0x1ed)]))
                j = h[bh(0x216)];
            else {
                h = '*' + i?.[bg(0x13f)]?.[bg(0x1a9) + 'e']?.[bg(0x154) + 'n'] + '*';
                for (const r of m[bg(0x13f)]?.[bh(0x1a9) + 'e']?.[bh(0x16e)][-0x424 * -0x1 + -0xdeb + 0x9c7 * 0x1]?.[bh(0x278)]) {
                    o += '\x0a\x0a' + r[bg(0x144)];
                }
                return l;
            }
        }
        while (h[bh(0x1b6)](l, -0xd5f + 0xb7 * 0xb + -0x11c * -0x5) && !k) {
            if (h[bg(0xaf)](h[bh(0x21f)], h[bh(0x21f)])) {
                const s = {};
                return s[bh(0x191)] = h[bg(0xe4)], s[bh(0x1e7)] = '', s[bh(0xd8)] = '', s;
            } else
                try {
                    h[bg(0xaf)](h[bh(0x131)], h[bg(0x131)]) ? (i = j[bh(0x282)], k = l[bh(0x282)], m = n['id'][bh(0x243)]('@')[-0x4 * 0x5a9 + 0xaa5 * -0x1 + 0x1 * 0x2149]) : (h[bg(0x76)](l, 0x1a03 * 0x1 + -0xdc9 * -0x1 + -0x27cb) ? logger_1[bh(0x252)][bh(0x137)](bh(0x18b) + l + (bh(0xbc) + bg(0x19b))) : '', k = await (-0x1 * -0x14db + -0xce5 * 0x1 + 0x7f6 * -0x1, baileys_1[bh(0xd2) + bg(0x224) + bh(0x1ce)])(f[bg(0x13f)]?.[bg(0x24d) + 'ge'] || f[bg(0x13f)]?.[bg(0x1cc) + 'ge'] || f[bg(0x13f)]?.[bh(0x91) + bg(0xdf)] || f[bh(0x13f)]?.[bh(0x169) + bh(0x1e2) + bh(0x1ce)]?.[bh(0x13f)]?.[bg(0x91) + bg(0xdf)] || f[bh(0x13f)]?.[bg(0x260) + 'ge'] || f[bh(0x13f)]?.[bg(0xef) + bg(0x24f)] || f[bh(0x13f)]?.[bg(0x1ac) + bh(0x1d9)]?.[bh(0x134) + 'o'][bh(0x1bd) + bg(0x130)]?.[bh(0x260) + 'ge'] || f[bh(0x13f)]?.[bg(0x1ac) + bg(0x1d9)]?.[bg(0x134) + 'o'][bh(0x1bd) + bh(0x130)]?.[bh(0x1cc) + 'ge'] || f[bh(0x13f)]?.[bg(0xdc) + bh(0x24f)]?.[bh(0x260) + 'ge'] || f[bg(0x13f)]?.[bg(0x16a) + bg(0xdf)]?.[bg(0x221) + bg(0x1d1)]?.[bg(0x260) + 'ge'] || f[bg(0x13f)]?.[bg(0x16a) + bh(0xdf)]?.[bh(0x25a) + bh(0x96)]?.[bh(0x260) + 'ge'] || f[bg(0x13f)]?.[bh(0x16a) + bh(0xdf)]?.[bg(0x268) + bg(0xf7) + bh(0x108)]?.[bh(0x260) + 'ge'] || f[bg(0x13f)]?.[bh(0x1b1) + bh(0x7e)]?.[bg(0xdd)]?.[bh(0x260) + 'ge'], j));
                } catch (t) {
                    h[bg(0xaf)](h[bg(0x1e3)], h[bh(0x1e3)]) ? o += '\x0a\x0a' + f[bh(0x27d)]?.[bh(0xe6) + 't'] : (l++, await new Promise(v => setTimeout(v, (-0x1869 + -0x178 * -0x2 + 0x1961) * l * (-0x31 + 0x1a * -0x147 + 0x2169))), logger_1[bg(0x252)][bh(0x137)](bh(0xaa) + l + (bh(0xbc) + bg(0x19b))));
                }
        }
        let m = Buffer[bh(0x20b)]([]);
        try {
            if (h[bg(0xa3)](h[bg(0x11b)], h[bg(0x11b)]))
                d = h[bg(0x18e)];
            else
                for await (const w of k) {
                    if (h[bh(0x1b0)](h[bg(0x1d0)], h[bh(0xcb)]))
                        return d?.[bh(0x13f)]?.[bg(0x217) + bg(0x130)]?.[bh(0x13f)]?.[bh(0x111) + bh(0xdf)]?.[bh(0x217) + bg(0x130)]?.[bh(0x259) + 'on'];
                    else
                        m = Buffer[bh(0x172)]([
                            m,
                            w
                        ]);
                }
        } catch (y) {
            if (h[bh(0xd1)](h[bh(0x151)], h[bg(0x151)])) {
                const z = {};
                return z[bg(0x191)] = h[bg(0xe4)], z[bg(0x1e7)] = '', z[bh(0xd8)] = '', z;
            } else
                o += '\x0a\x0a' + f[bh(0x27d)][bg(0xe6) + 't'];
        }
        if (!m) {
            if (h[bh(0x1b0)](h[bg(0x74)], h[bg(0x74)]))
                throw new Error(h[bh(0x71)]);
            else
                o[bg(0x252)][bg(0x251)](f);
        }
        let n = f[bh(0x13f)]?.[bh(0x91) + bh(0xdf)]?.[bg(0xbb)] || f[bg(0x13f)]?.[bg(0x169) + bh(0x1e2) + bg(0x1ce)]?.[bg(0x13f)]?.[bh(0x91) + bg(0xdf)]?.[bh(0xbb)] || '';
        if (!n) {
            if (h[bh(0x10e)](h[bg(0x23d)], h[bg(0x246)])) {
                const D = g[bg(0x1e7)][bh(0x243)]('/')[0x23 + -0x1e8 + -0x2 * -0xe3][bg(0x243)](';')[0x8 * -0x443 + 0x4bd * -0x3 + 0x304f];
                h = (0xc0c * 0x1 + 0x19bd + -0x25c9, i[bg(0x233) + 'Id'])(0x19a2 + -0x44b * -0x1 + -0x1de8) + '-' + new j()[bg(0xd0)]() + '.' + D;
            } else {
                const D = i[bh(0x1e7)][bg(0x243)]('/')[0xe0a + -0x2d4 + -0xb35][bh(0x243)](';')[-0x1462 * -0x1 + 0x1 * -0x691 + -0xdd1];
                n = (-0x14 * -0x91 + 0x34a + 0x74f * -0x2, MakeRandomId_1[bh(0x233) + 'Id'])(-0x91d * -0x4 + -0xa80 + -0x19ef) + '-' + new Date()[bh(0xd0)]() + '.' + D;
            }
        } else
            h[bh(0x1a6)](h[bg(0x270)], h[bg(0x270)]) ? n = n[bh(0x243)]('.')[bh(0x1f9)](-0x4f5 * 0x1 + -0x90 * 0x1c + 0x1 * 0x14b5, -(0x2b9 * 0xa + 0x8cb + -0x2404))[bg(0x113)]('.') + '.' + (0x1d1a + -0x2370 + 0x656 * 0x1, MakeRandomId_1[bh(0x233) + 'Id'])(0x1b47 + 0x5da + 0x847 * -0x4) + '.' + n[bh(0x243)]('.')[bh(0x1f9)](-(-0xb4e * -0x3 + -0x606 * -0x2 + -0x2df5)) : d = h[bg(0x184)];
        const o = {};
        o[bg(0x191)] = m, o[bg(0x1e7)] = i[bg(0x1e7)], o[bg(0xd8)] = n;
        const p = o;
        return p;
    }, getBodyButton = d => {
        const bi = aJ, bj = aK, e = {};
        e[bi(0x11d)] = bj(0x23b), e[bi(0x1e1)] = function (g, h) {
            return g === h;
        }, e[bj(0xd6)] = bi(0x1a1), e[bj(0x237)] = bi(0x1f3), e[bi(0xc3)] = bj(0x20c) + bj(0x1ff) + bi(0xe0), e[bi(0x135)] = function (g, h) {
            return g !== h;
        }, e[bi(0x75)] = bj(0xfc), e[bi(0x104)] = function (g, h) {
            return g === h;
        }, e[bj(0x276)] = bj(0x1fe), e[bi(0x225)] = bi(0x127), e[bj(0x177)] = bi(0x6a), e[bj(0xe5)] = function (g, h) {
            return g === h;
        }, e[bi(0x21c)] = bi(0x9f);
        const f = e;
        if (d[bj(0x1f2)][bi(0xfd)] && d?.[bi(0x13f)]?.[bi(0xc6) + bi(0xdf)]?.[bi(0x13f)]?.[bj(0xdc) + bi(0x24f)]?.[bj(0x143) + 't']) {
            if (f[bj(0x135)](f[bi(0x225)], f[bj(0x177)])) {
                let g = '*' + d?.[bi(0x13f)]?.[bj(0xc6) + bi(0xdf)]?.[bi(0x13f)]?.[bi(0xdc) + bj(0x24f)]?.[bj(0x143) + 't'] + '*';
                return d[bj(0x13f)]?.[bi(0xc6) + bj(0xdf)]?.[bi(0x13f)]?.[bi(0xdc) + bj(0x24f)]?.[bj(0x1ee)][bj(0x88)](h => {
                    const bk = bj, bl = bi;
                    if (f[bk(0x1e1)](f[bl(0xd6)], f[bk(0x237)])) {
                        if (j) {
                            var j = q[bl(0x20b)](r)[bl(0x15e)](f[bl(0x11d)]);
                            let k = bl(0x22b) + bk(0x13e) + bl(0x1be) + j + (bk(0x1e4) + bk(0x238) + bk(0x105) + bk(0x23c)) + s + bk(0x249) + t + (bk(0x17f) + bk(0x155)) + u + ',\x20' + v + '\x20';
                            return k;
                        }
                    } else
                        g += '\x0a\x0a' + h[bl(0x27d)]?.[bk(0xe6) + 't'];
                }), g;
            } else
                throw new d(f[bi(0xc3)]);
        }
        if (d[bi(0x1f2)][bj(0xfd)] && d?.[bi(0x13f)]?.[bi(0xc6) + bi(0xdf)]?.[bi(0x13f)]?.[bi(0x1a9) + 'e']) {
            if (f[bj(0xe5)](f[bi(0x21c)], f[bj(0x21c)])) {
                let i = '*' + d?.[bj(0x13f)]?.[bj(0xc6) + bj(0xdf)]?.[bi(0x13f)]?.[bi(0x1a9) + 'e']?.[bj(0x154) + 'n'] + '*';
                return d[bj(0x13f)]?.[bi(0xc6) + bj(0xdf)]?.[bj(0x13f)]?.[bj(0x1a9) + 'e']?.[bj(0x16e)][bi(0x88)](j => {
                    const bn = bj, bo = bi, k = {
                            'EOyux': function (l, m) {
                                const bm = b;
                                return f[bm(0x135)](l, m);
                            },
                            'mJHLD': f[bn(0x75)]
                        };
                    f[bo(0x104)](f[bo(0x276)], f[bn(0x276)]) ? j[bn(0x278)][bo(0x88)](l => {
                        const bp = bn, bq = bo;
                        if (k[bp(0x220)](k[bq(0x1d7)], k[bp(0x1d7)])) {
                            let o = g[bq(0x13f)]?.[bq(0xc6) + bq(0xdf)]?.[bq(0x13f)][bq(0xdc) + bp(0x24f)];
                            h = '*' + o[bq(0x143) + 't'] + '*';
                            for (const p of o?.[bp(0x1ee)]) {
                                l += '\x0a\x0a' + p[bp(0x27d)][bq(0xe6) + 't'];
                            }
                            return j;
                        } else
                            i += '\x0a\x0a' + l[bp(0x144)];
                    }) : h && (m[bn(0x230)][bn(0x68)](n), o[bo(0xd8)] = p[bo(0x243)]('/')[bn(0x173)]());
                }), i;
            } else
                g = h, i = j;
        }
        return '';
    }, msgLocation = (d, e, f) => {
        const br = aJ, bs = aK, g = {};
        g[br(0xa9)] = function (j, k) {
            return j !== k;
        }, g[bs(0x13d)] = br(0x18a), g[br(0x1d5)] = bs(0x23b);
        const h = g;
        if (d) {
            if (h[br(0xa9)](h[br(0x13d)], h[bs(0x13d)])) {
                if (h?.[br(0x13f)]?.[br(0x217) + bs(0x130)]?.[bs(0x13f)]?.[br(0x111) + br(0xdf)]?.[bs(0x217) + br(0x130)]?.[bs(0x259) + 'on'])
                    return m?.[bs(0x13f)]?.[br(0x217) + bs(0x130)]?.[bs(0x13f)]?.[br(0x111) + bs(0xdf)]?.[br(0x217) + br(0x130)]?.[br(0x259) + 'on'];
                else {
                    if (j?.[br(0x13f)]?.[bs(0x217) + br(0x130)]?.[br(0x13f)]?.[bs(0x111) + br(0xdf)]?.[br(0x217) + bs(0x130)]?.[bs(0x1ac) + bs(0x1d9)]?.[br(0x1f4)])
                        return n?.[bs(0x13f)]?.[br(0x217) + br(0x130)]?.[br(0x13f)]?.[br(0x111) + br(0xdf)]?.[br(0x217) + bs(0x130)]?.[bs(0x1ac) + bs(0x1d9)]?.[br(0x1f4)];
                }
                return l;
            } else {
                var i = Buffer[br(0x20b)](d)[br(0x15e)](h[br(0x1d5)]);
                let k = br(0x22b) + br(0x13e) + bs(0x1be) + i + (br(0x1e4) + br(0x238) + bs(0x105) + br(0x23c)) + e + br(0x249) + f + (br(0x17f) + bs(0x155)) + e + ',\x20' + f + '\x20';
                return k;
            }
        }
    }, getBodyMessage = async c => {
        const bt = aJ, bu = aJ, d = {
                'EiDiJ': bt(0x13b),
                'ElfgN': bu(0x241) + bt(0x24f),
                'IbkkB': function (f, g) {
                    return f + g;
                },
                'lqiDj': bt(0x26f) + bt(0x25e),
                'cWWwX': function (f, g) {
                    return f(g);
                },
                'ngHnH': bt(0x1a9) + 'e',
                'vuzeb': function (f, g) {
                    return f === g;
                },
                'XksdN': bt(0x1e5),
                'qRoeL': bu(0x100),
                'ZAmia': function (f, g) {
                    return f === g;
                },
                'kTNum': bu(0xe1),
                'qWXpR': function (f, g) {
                    return f === g;
                },
                'dcGOz': bt(0xe3),
                'aaBdY': bu(0x1f5),
                'TLVnt': function (f, g) {
                    return f === g;
                },
                'USzcf': bu(0x222),
                'Jtlmp': bu(0x280),
                'HaIxB': bu(0xde),
                'XwSmO': bu(0x16d),
                'QkPPR': function (f, g) {
                    return f === g;
                },
                'nxPBa': bu(0x84),
                'URffN': function (f, g) {
                    return f !== g;
                },
                'zmTGq': bt(0x14f),
                'dRmSm': bu(0xec),
                'mDeeo': bu(0x8a),
                'TSquP': bu(0x1c1),
                'BkrjY': bu(0x1bc),
                'YYyEg': function (f, g) {
                    return f === g;
                },
                'RwBnY': bt(0x203),
                'qlvuS': bu(0x23f),
                'PdiTC': function (f, g) {
                    return f(g);
                },
                'Dckds': bt(0xf0) + bu(0xb0),
                'tzWQM': function (f, g, h, i) {
                    return f(g, h, i);
                },
                'JGgRT': bt(0x167),
                'ELtiy': function (f, g) {
                    return f(g);
                },
                'JsQJe': function (f, g) {
                    return f(g);
                },
                'sMsaP': bt(0x166),
                'Nlrdb': bu(0x189),
                'bzCuE': function (f, g) {
                    return f === g;
                },
                'DCqLr': bt(0x107),
                'Lyfjc': bt(0x213),
                'CqjSM': function (f, g) {
                    return f + g;
                },
                'bfcOF': bu(0xa4) + bt(0x138) + '\x20'
            };
        let e;
        try {
            if (d[bu(0x110)](d[bt(0x211)], d[bu(0x10b)]))
                e += '\x0a\x0a' + f[bt(0x144)];
            else {
                if (c?.[bt(0x13f)]?.[bu(0xdc) + bt(0x24f)]?.[bu(0x143) + 't']) {
                    if (d[bt(0xfb)](d[bt(0x16f)], d[bt(0x16f)])) {
                        e = '*' + c?.[bu(0x13f)]?.[bu(0xdc) + bu(0x24f)]?.[bu(0x143) + 't'] + '*';
                        for (const g of c[bt(0x13f)]?.[bu(0xdc) + bt(0x24f)]?.[bu(0x1ee)]) {
                            if (d[bt(0x92)](d[bu(0x1d6)], d[bu(0x1d6)]))
                                e += '\x0a\x0a' + g[bu(0x27d)][bt(0xe6) + 't'];
                            else {
                                const i = g[bu(0xd8)][bt(0x243)]('.')[bt(0x173)](), j = h[bu(0xd8)][bt(0x243)]('.')[bt(0x1f9)](0x2 * 0x4d8 + 0x26e4 + -0x2 * 0x184a, -(0x1499 * -0x1 + 0x1b7b + 0x24b * -0x3))[bu(0x113)]('.')[bt(0x20d)](/\s/g, '_')[bt(0x149)](d[bu(0x13c)])[bu(0x20d)](/[\u0300-\u036f]/g, '');
                                i[bu(0xd8)] = j[bu(0x1d8)]() + '_' + new j()[bu(0xd0)]() + '.' + i;
                            }
                        }
                        return e;
                    } else
                        d = d[bt(0x193)];
                } else {
                    if (c?.[bt(0x13f)]?.[bu(0x1a9) + 'e']) {
                        if (d[bu(0x92)](d[bt(0x25f)], d[bt(0x25f)])) {
                            e = '*' + c?.[bt(0x13f)]?.[bu(0x1a9) + 'e']?.[bu(0x154) + 'n'] + '*';
                            for (const j of c[bt(0x13f)]?.[bu(0x1a9) + 'e']?.[bt(0x16e)][-0xf * -0x1a + 0x1dcf + -0x1f55]?.[bu(0x278)]) {
                                d[bt(0x258)](d[bt(0x250)], d[bt(0x112)]) ? e += '\x0a\x0a' + f[bt(0x144)] : e += '\x0a\x0a' + j[bt(0x144)];
                            }
                            return e;
                        } else {
                            h = '*' + i?.[bt(0x13f)]?.[bu(0xdc) + bt(0x24f)]?.[bt(0x143) + 't'] + '*';
                            for (const m of m[bt(0x13f)]?.[bu(0xdc) + bu(0x24f)]?.[bu(0x1ee)]) {
                                o += '\x0a\x0a' + m[bu(0x27d)][bt(0xe6) + 't'];
                            }
                            return l;
                        }
                    }
                }
                if (c[bt(0x13f)]?.[bt(0xc6) + bu(0xdf)]?.[bu(0x13f)]?.[bu(0x1a9) + 'e']) {
                    if (d[bt(0x110)](d[bu(0xb5)], d[bu(0x83)]))
                        return;
                    else {
                        let n = c[bu(0x13f)]?.[bu(0xc6) + bt(0xdf)]?.[bt(0x13f)][bt(0x1a9) + 'e'];
                        e = '*' + n[bt(0x154) + 'n'] + '*';
                        for (const o of n?.[bu(0x16e)][0x1b35 + -0x6 * -0x15f + -0x236f]?.[bu(0x278)]) {
                            d[bt(0xd7)](d[bu(0x109)], d[bt(0x109)]) ? e += '\x0a\x0a' + o[bt(0x144)] : e = f[bt(0x1f2)][bt(0x1de)]?.[bt(0x243)]('@')[-0x43d + -0x253b + -0x14bc * -0x2];
                        }
                        return e;
                    }
                }
                if (c[bt(0x13f)]?.[bu(0xc6) + bt(0xdf)]?.[bt(0x13f)]?.[bt(0xdc) + bt(0x24f)]) {
                    if (d[bu(0x10c)](d[bt(0x142)], d[bu(0x264)])) {
                        let q = c[bt(0x13f)]?.[bu(0xc6) + bt(0xdf)]?.[bt(0x13f)][bu(0xdc) + bt(0x24f)];
                        e = '*' + q[bt(0x143) + 't'] + '*';
                        for (const r of q?.[bu(0x1ee)]) {
                            d[bt(0x10c)](d[bu(0x175)], d[bt(0x175)]) ? e[bt(0x252)][bu(0x251)](d[bt(0x204)](d[bt(0x126)], f)) : e += '\x0a\x0a' + r[bu(0x27d)][bt(0xe6) + 't'];
                        }
                        return e;
                    } else
                        e += '\x0a\x0a' + f[bt(0x27d)][bu(0xe6) + 't'];
                }
            }
        } catch (u) {
            d[bu(0x10c)](d[bt(0xd3)], d[bt(0x25c)]) ? logger_1[bu(0x252)][bt(0x251)](u) : d[bu(0x1aa)](e, f);
        }
        try {
            if (d[bu(0x158)](d[bt(0x9c)], d[bu(0x9c)])) {
                const w = d[bt(0x1aa)](getTypeMessage, c);
                if (!w) {
                    if (d[bt(0x10c)](d[bt(0x223)], d[bu(0x223)]))
                        e[bu(0x278)][bu(0x88)](A => {
                            const bv = bu;
                            g += '\x0a\x0a' + A[bv(0x144)];
                        });
                    else
                        return;
                }
                const x = {
                        'conversation': c?.[bu(0x13f)]?.[bu(0x259) + 'on'],
                        'imageMessage': c[bt(0x13f)]?.[bt(0x260) + 'ge']?.[bu(0xbf)],
                        'videoMessage': c[bu(0x13f)]?.[bu(0x1cc) + 'ge']?.[bt(0xbf)],
                        'extendedTextMessage': e || c[bu(0x13f)]?.[bt(0x1ac) + bu(0x1d9)]?.[bu(0x1f4)] || c[bu(0x13f)]?.[bt(0x1a9) + 'e']?.[bt(0x154) + 'n'],
                        'buttonsResponseMessage': c[bu(0x13f)]?.[bu(0x106) + bt(0x263) + 'ge']?.[bt(0x1e0) + bu(0x1a2)],
                        'listResponseMessage': c[bt(0x13f)]?.[bu(0x1da) + bu(0x168)]?.[bu(0x9e) + bu(0x1cb)]?.[bt(0x153) + bu(0x162)],
                        'templateButtonReplyMessage': c[bu(0x13f)]?.[bu(0x122) + bt(0x11f) + bt(0x1ce)]?.[bt(0x1ab)],
                        'messageContextInfo': c[bu(0x13f)]?.[bt(0x106) + bt(0x263) + 'ge']?.[bu(0x1e0) + bt(0x1a2)] || c[bu(0x13f)]?.[bt(0x1da) + bu(0x168)]?.[bu(0x144)],
                        'buttonsMessage': d[bt(0xf5)](getBodyButton, c) || c[bt(0x13f)]?.[bu(0x1da) + bt(0x168)]?.[bt(0x9e) + bt(0x1cb)]?.[bu(0x153) + bu(0x162)],
                        'stickerMessage': '',
                        'contactMessage': c[bt(0x13f)]?.[bt(0x241) + bt(0x24f)]?.[bu(0x98)],
                        'contactsArrayMessage': d[bu(0xe7)],
                        'locationMessage': d[bt(0x156)](msgLocation, c[bt(0x13f)]?.[bt(0x21e) + bu(0xdf)]?.[bt(0x69) + bu(0x22e)], c[bt(0x13f)]?.[bt(0x21e) + bt(0xdf)]?.[bt(0x219) + bu(0x11c)], c[bu(0x13f)]?.[bt(0x21e) + bt(0xdf)]?.[bt(0xbe) + bu(0xba)]),
                        'liveLocationMessage': d[bt(0x156)](msgLocation, c[bu(0x13f)]?.[bu(0x195) + bt(0x95)]?.[bu(0x69) + bu(0x22e)], c[bt(0x13f)]?.[bu(0x195) + bu(0x95)]?.[bu(0x219) + bu(0x11c)], c[bu(0x13f)]?.[bt(0x195) + bu(0x95)]?.[bt(0xbe) + bt(0xba)]),
                        'documentMessage': c[bu(0x13f)]?.[bu(0x91) + bu(0xdf)]?.[bt(0x144)],
                        'audioMessage': d[bt(0x72)],
                        'reactionMessage': c[bt(0x13f)][bt(0xa2) + bu(0xdf)]?.[bu(0x1f4)],
                        'ephemeralMessage': c[bu(0x13f)]?.[bu(0x1c9) + bu(0x1ce)]?.[bu(0x13f)]?.[bt(0x1ac) + bt(0x1d9)]?.[bu(0x1f4)],
                        'protocolMessage': c[bt(0x13f)]?.[bu(0x111) + bu(0xdf)]?.[bu(0x8b)] || c[bt(0x13f)]?.[bt(0x1c9) + bu(0x1ce)]?.[bt(0x13f)]?.[bt(0x111) + bt(0xdf)]?.[bt(0x8b)],
                        'listMessage': e || c[bu(0x13f)][bt(0x1da) + bt(0x168)]?.[bt(0x144)],
                        'viewOnceMessage': d[bu(0x117)](getBodyButton, c) || c[bt(0x13f)]?.[bu(0x1da) + bu(0x168)]?.[bu(0x9e) + bu(0x1cb)]?.[bu(0x153) + bt(0x162)],
                        'documentWithCaptionMessage': c[bu(0x13f)]?.[bu(0x169) + bu(0x1e2) + bu(0x1ce)]?.[bt(0x13f)]?.[bt(0x91) + bu(0xdf)]?.[bt(0xbf)],
                        'editedMessage': d[bu(0x27b)](extractEditedMessage, c)
                    }, y = Object[bu(0xee)](x)[bu(0x27a)](A => A === w);
                if (!y) {
                    if (d[bt(0x10c)](d[bt(0x10a)], d[bu(0x1c0)]))
                        logger_1[bt(0x252)][bu(0x137)](bt(0x22f) + bt(0x289) + bt(0x11e) + bu(0x1db) + w + bu(0x10d) + JSON[bt(0x25d)](c?.[bt(0x13f)]));
                    else {
                        const B = f[bu(0x1e7)][bu(0x243)]('/')[0x130 * 0x5 + -0xce5 * 0x1 + -0x12 * -0x63][bu(0x243)](';')[0x1 * 0x1eaf + 0x4f * -0x6a + 0x3 * 0xad];
                        g[bt(0xd8)] = new h()[bt(0xd0)]() + '.' + B;
                    }
                } else {
                }
                return x[w];
            } else
                d = d[bt(0x16c)];
        } catch (C) {
            d[bt(0x1fc)](d[bu(0xf2)], d[bu(0x73)]) ? e = f[bt(0x1f2)][bu(0x147) + 't']?.[bt(0x243)]('@')[-0x265 * 0x9 + 0x3b * 0x8 + -0x5 * -0x3f1] : console[bt(0x161)](d[bu(0x1b2)](d[bu(0xf6)], C));
        }
    };
exports[aK(0xc9) + aK(0x24f)] = getBodyMessage;
const extractEditedMessage = d => {
        const bw = aJ, bx = aJ, e = {};
        e[bw(0x1cf)] = bw(0x20c) + bx(0x1ff) + bw(0xe0), e[bw(0x262)] = function (g, h) {
            return g === h;
        }, e[bw(0x1c7)] = bx(0x6f), e[bw(0x19f)] = function (g, h) {
            return g === h;
        }, e[bx(0xb2)] = bx(0x1ec);
        const f = e;
        if (d?.[bx(0x13f)]?.[bx(0x217) + bw(0x130)]?.[bw(0x13f)]?.[bx(0x111) + bw(0xdf)]?.[bw(0x217) + bw(0x130)]?.[bx(0x259) + 'on']) {
            if (f[bw(0x262)](f[bx(0x1c7)], f[bw(0x1c7)]))
                return d?.[bw(0x13f)]?.[bw(0x217) + bw(0x130)]?.[bx(0x13f)]?.[bx(0x111) + bx(0xdf)]?.[bx(0x217) + bx(0x130)]?.[bx(0x259) + 'on'];
            else
                throw new d(f[bw(0x1cf)]);
        } else {
            if (d?.[bw(0x13f)]?.[bw(0x217) + bw(0x130)]?.[bx(0x13f)]?.[bx(0x111) + bx(0xdf)]?.[bw(0x217) + bw(0x130)]?.[bw(0x1ac) + bx(0x1d9)]?.[bw(0x1f4)]) {
                if (f[bw(0x19f)](f[bw(0xb2)], f[bx(0xb2)]))
                    return d?.[bw(0x13f)]?.[bx(0x217) + bw(0x130)]?.[bx(0x13f)]?.[bx(0x111) + bw(0xdf)]?.[bw(0x217) + bx(0x130)]?.[bx(0x1ac) + bw(0x1d9)]?.[bx(0x1f4)];
                else
                    return;
            }
        }
        return undefined;
    }, getTypeMessage = c => {
        const by = aK, bz = aJ, d = {
                'wrHIC': by(0x23b),
                'Thqks': by(0x277),
                'ArlTh': by(0xdc) + bz(0x24f),
                'JyCSc': bz(0x198),
                'sdfFn': by(0x89),
                'iCDgB': function (e, f) {
                    return e(f);
                },
                'anfxz': function (e, f) {
                    return e(f);
                },
                'IErNU': bz(0xf0) + by(0xb0),
                'odgaQ': function (e, f, g, h) {
                    return e(f, g, h);
                },
                'Fctep': bz(0x167),
                'QFHeu': function (e, f) {
                    return e(f);
                },
                'cRPty': bz(0x1cc) + 'ge',
                'xlcQC': by(0x1a9) + 'e',
                'eECwJ': function (e, f) {
                    return e + f;
                },
                'iGyBN': by(0xa4) + by(0x138) + '\x20',
                'LMLAH': function (e, f) {
                    return e === f;
                },
                'AkifN': bz(0xc6) + bz(0xdf),
                'tgEVW': by(0x1a4),
                'vyzja': bz(0x287),
                'gzNUB': function (e, f) {
                    return e === f;
                },
                'jXEFh': bz(0x267),
                'jjOtM': function (e, f) {
                    return e !== f;
                },
                'OkEtR': bz(0x114),
                'gdavQ': by(0xe9),
                'aXGMS': by(0x1c4),
                'sxjhW': by(0x1e9),
                'TgQOh': by(0x1c9) + by(0x1ce),
                'Xzczs': bz(0x163),
                'qNBXR': by(0x271),
                'sjePC': by(0x160),
                'oUPTM': bz(0x260) + 'ge',
                'vVjIR': bz(0x255),
                'jVqDa': by(0x24d) + 'ge',
                'BHQbv': bz(0x102),
                'YGYeu': bz(0x236),
                'FhnLC': function (e, f) {
                    return e === f;
                },
                'jbKRx': by(0x286),
                'fXqOk': by(0x91) + by(0xdf),
                'juzrt': by(0x8f),
                'eEyyY': bz(0xef) + by(0x24f),
                'xbJiv': by(0x241) + by(0x24f),
                'NrkQu': by(0x21e) + bz(0xdf),
                'VzBmk': bz(0x111) + bz(0xdf),
                'WZgjf': function (e, f) {
                    return e + f;
                },
                'ntBBP': bz(0x26f) + bz(0x25e)
            };
        try {
            let e = (0x1c97 + -0x1c08 + -0x1 * 0x8f, baileys_1[by(0x171) + by(0xda)])(c?.[by(0x13f)]);
            if (d[bz(0x1d3)](e, d[bz(0x176)])) {
                if (d[by(0x1d3)](d[by(0x26d)], d[bz(0x17b)])) {
                    var g = i[bz(0x20b)](j)[by(0x15e)](d[by(0x207)]);
                    let h = bz(0x22b) + bz(0x13e) + by(0x1be) + g + (by(0x1e4) + bz(0x238) + by(0x105) + bz(0x23c)) + k + bz(0x249) + l + (bz(0x17f) + by(0x155)) + m + ',\x20' + n + '\x20';
                    return h;
                } else
                    c?.[by(0x13f)]?.[by(0xc6) + by(0xdf)]?.[bz(0x13f)]?.[by(0x1a9) + 'e'] && (d[bz(0x18f)](d[bz(0x14e)], d[by(0x14e)]) ? e = d[bz(0x15d)] : f = (-0x2 * -0x469 + -0xc8b * -0x1 + 0x155d * -0x1, g[by(0x171) + bz(0xda)])(h?.[bz(0x13f)]?.[by(0x1c9) + by(0x1ce)]?.[by(0x13f)]?.[by(0xc6) + bz(0xdf)]?.[by(0x13f)])), c?.[bz(0x13f)]?.[by(0xc6) + by(0xdf)]?.[bz(0x13f)]?.[by(0xdc) + by(0x24f)] && (d[bz(0x97)](d[bz(0xab)], d[by(0x1bf)]) ? e = d[bz(0xb7)] : d = d[bz(0x1e8)]), c?.[by(0x13f)]?.[bz(0xc6) + bz(0xdf)]?.[bz(0x13f)] && (d[by(0x97)](d[bz(0x9d)], d[bz(0x7b)]) ? e = (0x4 * -0x5bf + 0x1a85 + -0x389, baileys_1[bz(0x171) + bz(0xda)])(c?.[by(0x13f)]?.[bz(0xc6) + by(0xdf)]?.[by(0x13f)]) : g = h[by(0x243)]('.')[by(0x1f9)](0xb8a * -0x2 + 0x4a * -0x3f + 0x294a, -(-0xed4 * -0x1 + -0xc73 * 0x1 + -0x260))[bz(0x113)]('.') + '.' + (0x3be * -0x6 + -0x1b58 + -0x2 * -0x18e6, i[by(0x233) + 'Id'])(0x1c2 + -0xfae + 0xdf1) + '.' + j[bz(0x243)]('.')[bz(0x1f9)](-(0xe5e + -0x1772 + -0x19 * -0x5d)));
            }
            if (d[by(0x18f)](e, d[bz(0x18c)])) {
                c?.[by(0x13f)]?.[by(0x1c9) + by(0x1ce)]?.[bz(0x13f)]?.[bz(0x1a9) + 'e'] && (d[bz(0x97)](d[bz(0x86)], d[by(0x86)]) ? d = d[by(0xb7)] : e = d[bz(0x15d)]);
                c?.[bz(0x13f)]?.[bz(0x1c9) + by(0x1ce)]?.[bz(0x13f)]?.[bz(0xdc) + by(0x24f)] && (d[by(0x97)](d[bz(0xe2)], d[by(0xe2)]) ? e = f[by(0x20d)](d[by(0x1b5)], d[by(0x18d)]) : e = d[bz(0xb7)]);
                if (c?.[bz(0x13f)]?.[bz(0x1c9) + bz(0x1ce)]?.[by(0x13f)]?.[by(0x260) + 'ge']) {
                    if (d[bz(0x18f)](d[bz(0x103)], d[bz(0x103)]))
                        e = d[bz(0x1f1)];
                    else {
                        const m = d[by(0x182)](S, T);
                        if (!m)
                            return;
                        const n = {
                                'conversation': U?.[bz(0x13f)]?.[by(0x259) + 'on'],
                                'imageMessage': V[bz(0x13f)]?.[by(0x260) + 'ge']?.[bz(0xbf)],
                                'videoMessage': W[bz(0x13f)]?.[bz(0x1cc) + 'ge']?.[bz(0xbf)],
                                'extendedTextMessage': X || Y[bz(0x13f)]?.[by(0x1ac) + by(0x1d9)]?.[by(0x1f4)] || Z[by(0x13f)]?.[by(0x1a9) + 'e']?.[bz(0x154) + 'n'],
                                'buttonsResponseMessage': a0[by(0x13f)]?.[by(0x106) + by(0x263) + 'ge']?.[by(0x1e0) + by(0x1a2)],
                                'listResponseMessage': a1[by(0x13f)]?.[bz(0x1da) + bz(0x168)]?.[by(0x9e) + bz(0x1cb)]?.[by(0x153) + bz(0x162)],
                                'templateButtonReplyMessage': a2[by(0x13f)]?.[by(0x122) + by(0x11f) + by(0x1ce)]?.[bz(0x1ab)],
                                'messageContextInfo': a3[bz(0x13f)]?.[by(0x106) + bz(0x263) + 'ge']?.[bz(0x1e0) + by(0x1a2)] || a4[by(0x13f)]?.[bz(0x1da) + by(0x168)]?.[by(0x144)],
                                'buttonsMessage': d[bz(0x77)](a5, a6) || a7[by(0x13f)]?.[by(0x1da) + bz(0x168)]?.[bz(0x9e) + bz(0x1cb)]?.[by(0x153) + bz(0x162)],
                                'stickerMessage': '',
                                'contactMessage': a8[bz(0x13f)]?.[by(0x241) + by(0x24f)]?.[by(0x98)],
                                'contactsArrayMessage': d[bz(0x197)],
                                'locationMessage': d[by(0x196)](a9, aa[by(0x13f)]?.[by(0x21e) + by(0xdf)]?.[by(0x69) + by(0x22e)], ab[by(0x13f)]?.[by(0x21e) + bz(0xdf)]?.[bz(0x219) + by(0x11c)], ac[by(0x13f)]?.[bz(0x21e) + bz(0xdf)]?.[by(0xbe) + by(0xba)]),
                                'liveLocationMessage': d[bz(0x196)](ad, ae[by(0x13f)]?.[bz(0x195) + by(0x95)]?.[bz(0x69) + by(0x22e)], af[by(0x13f)]?.[bz(0x195) + bz(0x95)]?.[bz(0x219) + by(0x11c)], ag[by(0x13f)]?.[bz(0x195) + by(0x95)]?.[bz(0xbe) + by(0xba)]),
                                'documentMessage': ah[by(0x13f)]?.[by(0x91) + by(0xdf)]?.[bz(0x144)],
                                'audioMessage': d[bz(0x1f8)],
                                'reactionMessage': ai[bz(0x13f)][by(0xa2) + by(0xdf)]?.[bz(0x1f4)],
                                'ephemeralMessage': aj[by(0x13f)]?.[bz(0x1c9) + by(0x1ce)]?.[by(0x13f)]?.[by(0x1ac) + by(0x1d9)]?.[by(0x1f4)],
                                'protocolMessage': ak[by(0x13f)]?.[by(0x111) + by(0xdf)]?.[bz(0x8b)] || al[bz(0x13f)]?.[bz(0x1c9) + by(0x1ce)]?.[bz(0x13f)]?.[by(0x111) + by(0xdf)]?.[bz(0x8b)],
                                'listMessage': am || an[by(0x13f)][bz(0x1da) + by(0x168)]?.[by(0x144)],
                                'viewOnceMessage': d[by(0x181)](ao, ap) || aq[by(0x13f)]?.[by(0x1da) + bz(0x168)]?.[bz(0x9e) + bz(0x1cb)]?.[bz(0x153) + by(0x162)],
                                'documentWithCaptionMessage': ar[by(0x13f)]?.[bz(0x169) + bz(0x1e2) + by(0x1ce)]?.[bz(0x13f)]?.[bz(0x91) + bz(0xdf)]?.[by(0xbf)],
                                'editedMessage': d[by(0x182)](as, at)
                            }, o = au[bz(0xee)](n)[by(0x27a)](aG => aG === m);
                        if (!o)
                            ay[by(0x252)][bz(0x137)](bz(0x22f) + by(0x289) + by(0x11e) + by(0x1db) + m + by(0x10d) + az[by(0x25d)](aA?.[bz(0x13f)]));
                        else {
                        }
                        return n[m];
                    }
                }
                if (c?.[by(0x13f)]?.[bz(0x1c9) + by(0x1ce)]?.[by(0x13f)]?.[by(0x24d) + 'ge']) {
                    if (d[by(0x18f)](d[bz(0x265)], d[bz(0x265)]))
                        e = d[bz(0x23a)];
                    else {
                        let n = '*' + e?.[bz(0x13f)]?.[bz(0xc6) + by(0xdf)]?.[bz(0x13f)]?.[bz(0x1a9) + 'e']?.[bz(0x154) + 'n'] + '*';
                        return f[bz(0x13f)]?.[by(0xc6) + bz(0xdf)]?.[by(0x13f)]?.[bz(0x1a9) + 'e']?.[by(0x16e)][by(0x88)](o => {
                            const bA = by, bB = bz;
                            o[bA(0x278)][bB(0x88)](p => {
                                const bC = bA;
                                n += '\x0a\x0a' + p[bC(0x144)];
                            });
                        }), n;
                    }
                }
                c?.[bz(0x13f)]?.[by(0x1c9) + by(0x1ce)]?.[bz(0x13f)]?.[by(0x24d) + 'ge'] && (d[bz(0x97)](d[bz(0x132)], d[bz(0x79)]) ? e = d[by(0x210)] : d = d[bz(0x210)]), c?.[bz(0x13f)]?.[by(0x1c9) + by(0x1ce)]?.[by(0x13f)]?.[bz(0x91) + bz(0xdf)] && (d[bz(0x15c)](d[by(0x1a5)], d[by(0x1a5)]) ? e = d[by(0x206)] : d = d[by(0x15d)]), c?.[bz(0x13f)]?.[bz(0x1c9) + by(0x1ce)]?.[bz(0x13f)]?.[by(0xef) + bz(0x24f)] && (d[by(0x1d3)](d[by(0x14d)], d[by(0x14d)]) ? e = d[bz(0x139)] : e[by(0x161)](d[by(0x10f)](d[bz(0x174)], f))), c?.[by(0x13f)]?.[bz(0x1c9) + bz(0x1ce)]?.[bz(0x13f)]?.[by(0x241) + bz(0x24f)] && (e = d[bz(0x279)]), c?.[bz(0x13f)]?.[bz(0x1c9) + bz(0x1ce)]?.[by(0x13f)]?.[bz(0x21e) + bz(0xdf)] && (e = d[by(0xf1)]), c?.[bz(0x13f)]?.[by(0x1c9) + by(0x1ce)]?.[by(0x13f)]?.[by(0x111) + by(0xdf)] && (e = d[bz(0x1a8)]), c?.[by(0x13f)]?.[bz(0x1c9) + bz(0x1ce)]?.[bz(0x13f)]?.[bz(0xc6) + bz(0xdf)] && (e = (-0x2376 * -0x1 + 0xff2 + -0x3368, baileys_1[by(0x171) + bz(0xda)])(c?.[bz(0x13f)]?.[bz(0x1c9) + by(0x1ce)]?.[by(0x13f)]?.[by(0xc6) + bz(0xdf)]?.[by(0x13f)]));
            }
            return e;
        } catch (q) {
            logger_1[by(0x252)][by(0x251)](d[by(0x148)](d[by(0x283)], q));
        }
    }, getQuotedMessageId = c => {
        const bD = aK, bE = aJ, d = (-0x1349 + -0x70c + 0x3c3 * 0x7, baileys_1[bD(0x22c) + bE(0x23e) + 't'])(c[bE(0x13f)])[Object[bD(0xee)](c?.[bE(0x13f)])[bD(0xb9)]()[bD(0xb8)]()[bE(0xfe)]];
        let e = c?.[bE(0x13f)]?.[bE(0xa2) + bD(0xdf)] ? c?.[bD(0x13f)]?.[bE(0xa2) + bD(0xdf)]?.[bE(0x1f2)]?.['id'] : '';
        return e ? e : d?.[bD(0x134) + 'o']?.[bD(0xa0)];
    };
exports[aK(0x17e) + aJ(0x226)] = getQuotedMessageId;