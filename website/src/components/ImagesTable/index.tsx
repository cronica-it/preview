// import logger from '@docusaurus/logger'

const rowSize = 3

function splitRows(images) {
    const rows = []
    for (let i = 0; i < images.length / rowSize; ++i) {
        const row = []
        for (let j = 0; j < rowSize; ++j) {
            if (i * rowSize + j < images.length) {
                row.push(images[i * rowSize + j])
            }
        }
        rows.push(row)
    }
    return rows
}

function Columns({ columns }) {
    return columns.map(column => <td><img src={column.src} alt={column.alt} /></td>)
}

function Rows({ rows }) {
    return rows.map(row => <tr><Columns columns={row} /></tr>)
}

export function ImagesTable({ images }): JSX.Element {
    const rows = splitRows(images)

    return <table class="images"><Rows rows={rows} /></table>;
}
