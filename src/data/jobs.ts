/** 메이플스토리 내 직업 */
export enum Jobs {
    '히어로',
    '팔라딘',
    '다크나이트',
    '아크메이지(불,독)',
    '아크메이지(썬,콜)',
    '비숍',
    '보우마스터',
    '신궁',
    '패스파인더',
    '나이트로드',
    '섀도어',
    '듀얼블레이드',
    '바이퍼',
    '캡틴',
    '캐논슈터',
    '소울마스터',
    '미하일',
    '플레임위자드',
    '윈드브레이커',
    '나이트워커',
    '스트라이커',
    '블래스터',
    '배틀메이지',
    '와일드헌터',
    '메카닉',
    '제논',
    '데몬슬레이어',
    '데몬어벤져',
    '아란',
    '에반',
    '루미너스',
    '메르세데스',
    '팬텀',
    '은월',
    '카이저',
    '카인',
    '카데나',
    '엔젤릭버스터',
    '아델',
    '일리움',
    '아크',
    '라라',
    '호영',
    '제로',
    '키네시스',
}

/** 직업 유형 */
export enum JobType {
    '모험가',
    '시그너스',
    '레지스탕스',
    '데몬',
    '영웅',
    '노바',
    '레프',
    '아니마',
    '제로',
    '키네시스',
}

/** 직업 정보 */
export interface JobInfo {
    id: Jobs;
    type: JobType;
}

/** 직업별 상세 정보 */
export const jobsDetail: JobInfo[] = [
    {
        id: Jobs['히어로'],
        type: JobType['모험가'],
    },
    {
        id: Jobs['팔라딘'],
        type: JobType['모험가'],
    },
    {
        id: Jobs['다크나이트'],
        type: JobType['모험가'],
    },
    {
        id: Jobs['아크메이지(불,독)'],
        type: JobType['모험가'],
    },
    {
        id: Jobs['아크메이지(썬,콜)'],
        type: JobType['모험가'],
    },
    {
        id: Jobs['비숍'],
        type: JobType['모험가'],
    },
    {
        id: Jobs['보우마스터'],
        type: JobType['모험가'],
    },
    {
        id: Jobs['신궁'],
        type: JobType['모험가'],
    },
    {
        id: Jobs['패스파인더'],
        type: JobType['모험가'],
    },
    {
        id: Jobs['나이트로드'],
        type: JobType['모험가'],
    },
    {
        id: Jobs['섀도어'],
        type: JobType['모험가'],
    },
    {
        id: Jobs['듀얼블레이드'],
        type: JobType['모험가'],
    },
    {
        id: Jobs['바이퍼'],
        type: JobType['모험가'],
    },
    {
        id: Jobs['캡틴'],
        type: JobType['모험가'],
    },
    {
        id: Jobs['캐논슈터'],
        type: JobType['모험가'],
    },
    {
        id: Jobs['소울마스터'],
        type: JobType['시그너스'],
    },
    {
        id: Jobs['미하일'],
        type: JobType['시그너스'],
    },
    {
        id: Jobs['플레임위자드'],
        type: JobType['시그너스'],
    },
    {
        id: Jobs['윈드브레이커'],
        type: JobType['시그너스'],
    },
    {
        id: Jobs['나이트워커'],
        type: JobType['시그너스'],
    },
    {
        id: Jobs['스트라이커'],
        type: JobType['시그너스'],
    },
    {
        id: Jobs['블래스터'],
        type: JobType['레지스탕스'],
    },
    {
        id: Jobs['배틀메이지'],
        type: JobType['레지스탕스'],
    },
    {
        id: Jobs['와일드헌터'],
        type: JobType['레지스탕스'],
    },
    {
        id: Jobs['메카닉'],
        type: JobType['레지스탕스'],
    },
    {
        id: Jobs['제논'],
        type: JobType['레지스탕스'],
    },
    {
        id: Jobs['데몬슬레이어'],
        type: JobType['데몬'],
    },
    {
        id: Jobs['데몬어벤져'],
        type: JobType['데몬'],
    },
    {
        id: Jobs['아란'],
        type: JobType['영웅'],
    },
    {
        id: Jobs['에반'],
        type: JobType['영웅'],
    },
    {
        id: Jobs['루미너스'],
        type: JobType['영웅'],
    },
    {
        id: Jobs['메르세데스'],
        type: JobType['영웅'],
    },
    {
        id: Jobs['팬텀'],
        type: JobType['영웅'],
    },
    {
        id: Jobs['은월'],
        type: JobType['영웅'],
    },
    {
        id: Jobs['카이저'],
        type: JobType['노바'],
    },
    {
        id: Jobs['카인'],
        type: JobType['노바'],
    },
    {
        id: Jobs['카데나'],
        type: JobType['노바'],
    },
    {
        id: Jobs['엔젤릭버스터'],
        type: JobType['노바'],
    },
    {
        id: Jobs['아델'],
        type: JobType['레프'],
    },
    {
        id: Jobs['일리움'],
        type: JobType['레프'],
    },
    {
        id: Jobs['아크'],
        type: JobType['레프'],
    },
    {
        id: Jobs['라라'],
        type: JobType['아니마'],
    },
    {
        id: Jobs['호영'],
        type: JobType['아니마'],
    },
    {
        id: Jobs['제로'],
        type: JobType['제로'],
    },
    {
        id: Jobs['키네시스'],
        type: JobType['키네시스'],
    },
];

/** 스탯 정보 (주스탯, 주스탯%, 주스탯!, 부스탯, 부스탯%, 부스탯!, 공마, 공마퍼, 데미지, 보공, 최종뎀, 방무, 크확, 크뎀, 숙련도, 무기 상수) */
export interface StatState {
    mainStat: number;
    mainStatPercentage: number;
    mainStatAbsolute: number;
    subStat: number;
    subStatPercentage: number;
    subStatAbsolute: number;
    physicalOrMagical: number;
    physicalOrMagicalPercentage: number;
    damage: number;
    bossDamage: number;
    finalDamage: number;
    ignoreDefense: number;
    criticalRate: number;
    criticalDamage: number;
    expert: number;
    weaponConstant: number;
}

/** 기본 패시브 수치 */
export const basePassive: { [key in Jobs]: StatState } = {
    [Jobs['히어로']]: {
        mainStat: 50,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 30,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 80,
        physicalOrMagicalPercentage: 0,
        damage: 0,
        bossDamage: 20,
        finalDamage: 202.5,
        ignoreDefense: 50,
        criticalRate: 35,
        criticalDamage: 28,
        expert: 0.9,
        weaponConstant: 1.44,
    },
    [Jobs['팔라딘']]: {
        mainStat: 50,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 30,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 30,
        physicalOrMagicalPercentage: 0,
        damage: 0,
        bossDamage: 0,
        finalDamage: 71.82,
        ignoreDefense: 31,
        criticalRate: 57,
        criticalDamage: 28,
        expert: 0.9,
        weaponConstant: 1.34,
    },
    [Jobs['다크나이트']]: {
        mainStat: 50,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 30,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 100,
        physicalOrMagicalPercentage: 0,
        damage: 5,
        bossDamage: 15,
        finalDamage: 167.3,
        ignoreDefense: 30,
        criticalRate: 85,
        criticalDamage: 46,
        expert: 0.9,
        weaponConstant: 1.49,
    },
    [Jobs['아크메이지(불,독)']]: {
        mainStat: 60,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 0,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 70,
        physicalOrMagicalPercentage: 0,
        damage: 50,
        bossDamage: 0,
        finalDamage: 50,
        ignoreDefense: 20,
        criticalRate: 45,
        criticalDamage: 21,
        expert: 0.95,
        weaponConstant: 1.2,
    },
    [Jobs['아크메이지(썬,콜)']]: {
        mainStat: 60,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 0,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 70,
        physicalOrMagicalPercentage: 0,
        damage: 50,
        bossDamage: 0,
        finalDamage: 50,
        ignoreDefense: 20,
        criticalRate: 45,
        criticalDamage: 21,
        expert: 0.95,
        weaponConstant: 1.2,
    },
    [Jobs['비숍']]: {
        mainStat: 60,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 0,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 120,
        physicalOrMagicalPercentage: 0,
        damage: 0,
        bossDamage: 10,
        finalDamage: 33.9,
        ignoreDefense: 36,
        criticalRate: 85,
        criticalDamage: 21,
        expert: 0.95,
        weaponConstant: 1.2,
    },
    [Jobs['보우마스터']]: {
        mainStat: 130,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 30,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 150,
        physicalOrMagicalPercentage: 25,
        damage: 0,
        bossDamage: 0,
        finalDamage: 37.8,
        ignoreDefense: 25,
        criticalRate: 65,
        criticalDamage: 23,
        expert: 0.85,
        weaponConstant: 1.3,
    },
    [Jobs['신궁']]: {
        mainStat: 130,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 30,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 60,
        physicalOrMagicalPercentage: 0,
        damage: 15,
        bossDamage: 0,
        finalDamage: 63.94,
        ignoreDefense: 58,
        criticalRate: 65,
        criticalDamage: 50,
        expert: 0.85,
        weaponConstant: 1.35,
    },
    [Jobs['패스파인더']]: {
        mainStat: 120,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 30,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 80,
        physicalOrMagicalPercentage: 20,
        damage: 10,
        bossDamage: 0,
        finalDamage: 20,
        ignoreDefense: 30,
        criticalRate: 75,
        criticalDamage: 25,
        expert: 0.85,
        weaponConstant: 1.3,
    },
    [Jobs['나이트로드']]: {
        mainStat: 70,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 30,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 80,
        physicalOrMagicalPercentage: 0,
        damage: 0,
        bossDamage: 10,
        finalDamage: 25,
        ignoreDefense: 30,
        criticalRate: 85,
        criticalDamage: 38,
        expert: 0.9,
        weaponConstant: 1.75,
    },
    [Jobs['섀도어']]: {
        mainStat: 60,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 30,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 160,
        physicalOrMagicalPercentage: 0,
        damage: 0,
        bossDamage: 0,
        finalDamage: 43.75,
        ignoreDefense: 20,
        criticalRate: 65,
        criticalDamage: 48,
        expert: 0.9,
        weaponConstant: 1.3,
    },
    [Jobs['듀얼블레이드']]: {
        mainStat: 30,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 30,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 90,
        physicalOrMagicalPercentage: 0,
        damage: 0,
        bossDamage: 0,
        finalDamage: 20,
        ignoreDefense: 0,
        criticalRate: 50,
        criticalDamage: 21,
        expert: 0.9,
        weaponConstant: 1.3,
    },
    [Jobs['바이퍼']]: {
        mainStat: 50,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 30,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 90,
        physicalOrMagicalPercentage: 30,
        damage: 0,
        bossDamage: 20,
        finalDamage: 10,
        ignoreDefense: 40,
        criticalRate: 92,
        criticalDamage: 23,
        expert: 0.9,
        weaponConstant: 1.7,
    },
    [Jobs['캡틴']]: {
        mainStat: 50,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 30,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 90,
        physicalOrMagicalPercentage: 20,
        damage: 0,
        bossDamage: 0,
        finalDamage: 29.6,
        ignoreDefense: 20,
        criticalRate: 85,
        criticalDamage: 63,
        expert: 0.85,
        weaponConstant: 1.5,
    },
    [Jobs['캐논슈터']]: {
        mainStat: 110,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 90,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 60,
        physicalOrMagicalPercentage: 0,
        damage: 0,
        bossDamage: 40,
        finalDamage: 57.66,
        ignoreDefense: 20,
        criticalRate: 55,
        criticalDamage: 23,
        expert: 0.85,
        weaponConstant: 1.5,
    },
    [Jobs['소울마스터']]: {
        mainStat: 110,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 50,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 215,
        physicalOrMagicalPercentage: 10,
        damage: 0,
        bossDamage: 15,
        finalDamage: 37.5,
        ignoreDefense: 37,
        criticalRate: 60,
        criticalDamage: 23,
        expert: 0.9,
        weaponConstant: 1.34,
    },
    [Jobs['미하일']]: {
        mainStat: 90,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 30,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 110,
        physicalOrMagicalPercentage: 10,
        damage: 60,
        bossDamage: 0,
        finalDamage: 64.45,
        ignoreDefense: 40,
        criticalRate: 70,
        criticalDamage: 28,
        expert: 0.9,
        weaponConstant: 1.2,
    },
    [Jobs['플레임위자드']]: {
        mainStat: 60,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 0,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 90,
        physicalOrMagicalPercentage: 10,
        damage: 0,
        bossDamage: 0,
        finalDamage: 95,
        ignoreDefense: 30,
        criticalRate: 45,
        criticalDamage: 28,
        expert: 0.95,
        weaponConstant: 1.2,
    },
    [Jobs['윈드브레이커']]: {
        mainStat: 50,
        mainStatPercentage: 15,
        mainStatAbsolute: 0,
        subStat: 30,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 120,
        physicalOrMagicalPercentage: 20,
        damage: 35,
        bossDamage: 40,
        finalDamage: 48.5,
        ignoreDefense: 15,
        criticalRate: 60,
        criticalDamage: 35,
        expert: 0.85,
        weaponConstant: 1.3,
    },
    [Jobs['나이트워커']]: {
        mainStat: 60,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 0,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 70,
        physicalOrMagicalPercentage: 10,
        damage: 30,
        bossDamage: 0,
        finalDamage: 20,
        ignoreDefense: 15,
        criticalRate: 50,
        criticalDamage: 38,
        expert: 0.85,
        weaponConstant: 1.75,
    },
    [Jobs['스트라이커']]: {
        mainStat: 60,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 0,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 50,
        physicalOrMagicalPercentage: 10,
        damage: 5,
        bossDamage: 0,
        finalDamage: 20,
        ignoreDefense: 9,
        criticalRate: 45,
        criticalDamage: 53,
        expert: 0.9,
        weaponConstant: 1.7,
    },
    [Jobs['블래스터']]: {
        mainStat: 30,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 30,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 60,
        physicalOrMagicalPercentage: 15,
        damage: 20,
        bossDamage: 20,
        finalDamage: 0,
        ignoreDefense: 35,
        criticalRate: 75,
        criticalDamage: 28,
        expert: 0.9,
        weaponConstant: 1.7,
    },
    [Jobs['배틀메이지']]: {
        mainStat: 40,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 0,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 80,
        physicalOrMagicalPercentage: 40,
        damage: 70,
        bossDamage: 0,
        finalDamage: 25,
        ignoreDefense: 30,
        criticalRate: 70,
        criticalDamage: 58,
        expert: 0.95,
        weaponConstant: 1.2,
    },
    [Jobs['와일드헌터']]: {
        mainStat: 130,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 70,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 100,
        physicalOrMagicalPercentage: 35,
        damage: 10,
        bossDamage: 10,
        finalDamage: 32,
        ignoreDefense: 30,
        criticalRate: 73,
        criticalDamage: 47,
        expert: 0.85,
        weaponConstant: 1.35,
    },
    [Jobs['메카닉']]: {
        mainStat: 30,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 30,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 75,
        physicalOrMagicalPercentage: 0,
        damage: 10,
        bossDamage: 0,
        finalDamage: 34,
        ignoreDefense: 30,
        criticalRate: 75,
        criticalDamage: 13,
        expert: 0.85,
        weaponConstant: 1.5,
    },
    [Jobs['제논']]: {
        mainStat: 315,
        mainStatPercentage: 20,
        mainStatAbsolute: 0,
        subStat: 0,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 50,
        physicalOrMagicalPercentage: 0,
        damage: 40,
        bossDamage: 0,
        finalDamage: 15,
        ignoreDefense: 30,
        criticalRate: 53,
        criticalDamage: 16,
        expert: 0.9,
        weaponConstant: 1.3125,
    },
    [Jobs['데몬슬레이어']]: {
        mainStat: 30,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 30,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 100,
        physicalOrMagicalPercentage: 0,
        damage: 35,
        bossDamage: 0,
        finalDamage: 30,
        ignoreDefense: 30,
        criticalRate: 80,
        criticalDamage: 23,
        expert: 0.9,
        weaponConstant: 1.2,
    },
    [Jobs['데몬어벤져']]: {
        mainStat: 600,
        mainStatPercentage: 40,
        mainStatAbsolute: 0,
        subStat: 0,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 90,
        physicalOrMagicalPercentage: 0,
        damage: 30,
        bossDamage: 0,
        finalDamage: 15,
        ignoreDefense: 30,
        criticalRate: 35,
        criticalDamage: 16,
        expert: 0.9,
        weaponConstant: 1.3,
    },
    [Jobs['아란']]: {
        mainStat: 30,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 30,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 180,
        physicalOrMagicalPercentage: 5,
        damage: 20,
        bossDamage: 0,
        finalDamage: 8,
        ignoreDefense: 40,
        criticalRate: 65,
        criticalDamage: 26,
        expert: 0.9,
        weaponConstant: 1.49,
    },
    [Jobs['에반']]: {
        mainStat: 70,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 10,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 185,
        physicalOrMagicalPercentage: 35,
        damage: 20,
        bossDamage: 20,
        finalDamage: 49.5,
        ignoreDefense: 20,
        criticalRate: 60,
        criticalDamage: 48,
        expert: 0.95,
        weaponConstant: 1.2,
    },
    [Jobs['루미너스']]: {
        mainStat: 80,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 0,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 80,
        physicalOrMagicalPercentage: 0,
        damage: 15,
        bossDamage: 15,
        finalDamage: 90.4,
        ignoreDefense: 40,
        criticalRate: 50,
        criticalDamage: 26,
        expert: 0.95,
        weaponConstant: 1.2,
    },
    [Jobs['메르세데스']]: {
        mainStat: 50,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 30,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 90,
        physicalOrMagicalPercentage: 30,
        damage: 50,
        bossDamage: 20,
        finalDamage: 57.5,
        ignoreDefense: 25,
        criticalRate: 70,
        criticalDamage: 38,
        expert: 0.85,
        weaponConstant: 1.3,
    },
    [Jobs['팬텀']]: {
        mainStat: 140,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 40,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 80,
        physicalOrMagicalPercentage: 0,
        damage: 30,
        bossDamage: 0,
        finalDamage: 71.6,
        ignoreDefense: 30,
        criticalRate: 50,
        criticalDamage: 23,
        expert: 0.9,
        weaponConstant: 1.3,
    },
    [Jobs['은월']]: {
        mainStat: 60,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 0,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 20,
        physicalOrMagicalPercentage: 0,
        damage: 20,
        bossDamage: 30,
        finalDamage: 40.07,
        ignoreDefense: 30,
        criticalRate: 40,
        criticalDamage: 28,
        expert: 0.9,
        weaponConstant: 1.7,
    },
    [Jobs['카이저']]: {
        mainStat: 50,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 0,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 115,
        physicalOrMagicalPercentage: 30,
        damage: 0,
        bossDamage: 18,
        finalDamage: 32,
        ignoreDefense: 40,
        criticalRate: 75,
        criticalDamage: 23,
        expert: 0.9,
        weaponConstant: 1.34,
    },
    [Jobs['카인']]: {
        mainStat: 60,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 0,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 110,
        physicalOrMagicalPercentage: 0,
        damage: 10,
        bossDamage: 10,
        finalDamage: 87.2,
        ignoreDefense: 37,
        criticalRate: 70,
        criticalDamage: 48,
        expert: 0.85,
        weaponConstant: 1.3,
    },
    [Jobs['카데나']]: {
        mainStat: 80,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 30,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 70,
        physicalOrMagicalPercentage: 0,
        damage: 0,
        bossDamage: 0,
        finalDamage: 0,
        ignoreDefense: 20,
        criticalRate: 85,
        criticalDamage: 41,
        expert: 0.9,
        weaponConstant: 1.3,
    },
    [Jobs['엔젤릭버스터']]: {
        mainStat: 80,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 0,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 90,
        physicalOrMagicalPercentage: 0,
        damage: 20,
        bossDamage: 0,
        finalDamage: 25,
        ignoreDefense: 15,
        criticalRate: 45,
        criticalDamage: 68,
        expert: 0.95,
        weaponConstant: 1.7,
    },
    [Jobs['아델']]: {
        mainStat: 60,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 0,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 150,
        physicalOrMagicalPercentage: 10,
        damage: 0,
        bossDamage: 10,
        finalDamage: 49.5,
        ignoreDefense: 20,
        criticalRate: 55,
        criticalDamage: 18,
        expert: 0.9,
        weaponConstant: 1.3,
    },
    [Jobs['일리움']]: {
        mainStat: 40,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 0,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 115,
        physicalOrMagicalPercentage: 10,
        damage: 20,
        bossDamage: 30,
        finalDamage: 40,
        ignoreDefense: 25,
        criticalRate: 55,
        criticalDamage: 38,
        expert: 0.9,
        weaponConstant: 1.2,
    },
    [Jobs['아크']]: {
        mainStat: 60,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 0,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 110,
        physicalOrMagicalPercentage: 0,
        damage: 0,
        bossDamage: 30,
        finalDamage: 32,
        ignoreDefense: 30,
        criticalRate: 65,
        criticalDamage: 38,
        expert: 0.9,
        weaponConstant: 1.7,
    },
    [Jobs['라라']]: {
        mainStat: 40,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 0,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 135,
        physicalOrMagicalPercentage: 0,
        damage: 20,
        bossDamage: 10,
        finalDamage: 88.5,
        ignoreDefense: 40,
        criticalRate: 55,
        criticalDamage: 28,
        expert: 0.95,
        weaponConstant: 1.2,
    },
    [Jobs['호영']]: {
        mainStat: 60,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 0,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 110,
        physicalOrMagicalPercentage: 10,
        damage: 10,
        bossDamage: 20,
        finalDamage: 51.25,
        ignoreDefense: 19,
        criticalRate: 65,
        criticalDamage: 48,
        expert: 0.9,
        weaponConstant: 1.3,
    },
    [Jobs['제로']]: {
        mainStat: 50,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 0,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 100,
        physicalOrMagicalPercentage: 0,
        damage: 0,
        bossDamage: 90,
        finalDamage: 45,
        ignoreDefense: 19,
        criticalRate: 65,
        criticalDamage: 8,
        expert: 0.9,
        weaponConstant: 1.49,
    },
    [Jobs['키네시스']]: {
        mainStat: 40,
        mainStatPercentage: 0,
        mainStatAbsolute: 0,
        subStat: 0,
        subStatPercentage: 0,
        subStatAbsolute: 0,
        physicalOrMagical: 100,
        physicalOrMagicalPercentage: 10,
        damage: 40,
        bossDamage: 30,
        finalDamage: 68,
        ignoreDefense: 25,
        criticalRate: 55,
        criticalDamage: 38,
        expert: 0.9,
        weaponConstant: 1.2,
    },
};
