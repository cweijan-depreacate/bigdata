<template>
<!-- 测试结果, 非常卡, 不推荐 -->
  <n-data-table :columns="columns" :data="data" :max-height="950" :scroll-x="1800" virtual-scroll />
</template>

<script lang="ts">
import { h, defineComponent } from "vue";
import type { DataTableColumns } from "naive-ui";
import { columns as fields } from "../../vue-project/src/res/columns";
import { data } from "../../vue-project/src/res/data";

type RowData = {
  key: number;
  name: string;
  age: number;
  address: string;
};

const columns: DataTableColumns<RowData> = fields.map((col) => ({
  title: col,
  key: col,
  width: 200,
  fixed: "left",
}));

export default defineComponent({
  setup() {
    // const data: RowData[] = Array.from({ length: 5000 }).map((_, index) => ({
    //   key: index,
    //   name: `Edward King ${index}`,
    //   age: 32,
    //   address: `London, Park Lane no. ${index}`,
    // }));
    return {
      data,
      columns,
    };
  },
});
</script>