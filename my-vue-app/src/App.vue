<template>
  <el-table-v2
    :columns="columns"
    :data="data"
    :width="1400"
    :height="1000"
    fixed
  />
</template>

<script lang="ts" setup>
import { columns  as fields} from "../../vue-project/src/res/columns"
import { data } from "../../vue-project/src/res/data"

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

const columns = fields.map((col) => ({
  title: col,
  dataKey: col,
  key: col,
  width: 200,
  fixed: "left",
}));
// const columns = generateColumns(10)
// const data = generateData(columns, 1000)
</script>
