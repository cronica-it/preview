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

export function ImagesTable({ images }): JSX.Element {
    const rows = splitRows(images)
    return (
        <table class="images">
            {
                rows.map(row =>
                    <tr>
                        {
                            row.map(column =>
                                <td>
                                    <a href={column.src} target="_blank"><img src={column.src} alt={column.alt} /></a>
                                </td>
                            )
                        }
                    </tr>
                )
            }
        </table>
    );
}
