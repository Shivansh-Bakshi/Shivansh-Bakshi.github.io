const size = {
    MOBILES: '320px',
    MOBILEM: '375px',
    MOBILEL: '425px',
    TABLET: '768px',
    LAPTOP: '1024px',
    LAPTOPL: '1440px',
    DESKTOP: '2560px'
};

export const MIN_WIDTH = {
    MOBILES: `(min-width: ${size.MOBILES})`,
    MOBILEM: `(min-width: ${size.MOBILEM})`,
    MOBILEL: `(min-width: ${size.MOBILEL})`,
    TABLET: `(min-width: ${size.TABLET})`,
    LAPTOP: `(min-width: ${size.LAPTOP})`,
    LAPTOPL: `(min-width: ${size.LAPTOPL})`,
    DESKTOP: `(min-width: ${size.DESKTOP})`
}

export const MAX_WIDTH = {
    MOBILES: `(max-width: ${size.MOBILES})`,
    MOBILEM: `(max-width: ${size.MOBILEM})`,
    MOBILEL: `(max-width: ${size.MOBILEL})`,
    TABLET: `(max-width: ${size.TABLET})`,
    LAPTOP: `(max-width: ${size.LAPTOP})`,
    LAPTOPL: `(max-width: ${size.LAPTOPL})`,
    DESKTOP: `(max-width: ${size.DESKTOP})`
}