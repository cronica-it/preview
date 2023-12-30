// import logger from '@docusaurus/logger'

const rowSize = 3

function splitRows(images) {
    const rows = []

    let row = []
    images.forEach((image, index) => {
        if (index % rowSize == 0) {
            row = []
            rows.push(row)
        }
        row.push(image)
    })

    return rows
}

function ImagesTableColumns({ columns }) {
    return columns.map(column =>
        <td>
            <img src={column.src} alt={column.alt} />
        </td>
    )
}

function ImagesTableRows({ rows }) {
    return rows.map(row =>
        <tr>
            <ImagesTableColumns columns={row} />
        </tr>
    )
}

export function ImagesTable({ images }): JSX.Element {
    const rows = splitRows(images)
    return (
        <table class="images">
            <ImagesTableRows rows={rows} />
        </table>
    );
}
