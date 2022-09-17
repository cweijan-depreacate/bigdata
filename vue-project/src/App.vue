<script >
import { data } from './res/data'
import { columns } from './res/columns'

export default {
  data() {
    return {
      data,columns
    }
  }
}
</script>

<template>
  <div id="app">
    <ux-grid :data="data">
      <ux-table-column type="checkbox" width="40" fixed="left"></ux-table-column>
      <ux-table-column type="index" width="40">
      </ux-table-column>
      <!-- 其中title为列的名称, index为索引 -->
      <ux-table-column v-for="(field,index) in columns" :key="index" :resizable="true" :field="field" :title="field" :sortable="true" remote-sort="true" edit-render>
        <template>
          {{field}}
        </template>
      </ux-table-column>
    </ux-grid>
  </div>
</template>

<style scoped>
</style>
