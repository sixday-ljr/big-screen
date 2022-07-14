<template>
  <div class="hello">
    <transition name="el-zoom-in-top">
      <div class="z-content">
        <div class="pagecenter">
          <div class="subtitle">隐患情况</div>
        </div>
        <el-form :model="queryForm" inline>
          <el-form-item>
            <ZxhSearch
              :sColumns="columns"
              @change-queryForm="hanleSelect"
              @clickcwb="handleSearch"
              @cwbreset="handleReset"
              :search="onSearch"
            ></ZxhSearch>
          </el-form-item>
        </el-form>
        <el-table
          class="tableMouseOn"
          :data="datalist"
          border
          :highlight-current-row="false"
          :header-cell-style="{ textAlign: 'center', backgroundColor: '#0554a6', color: '#19d2f6', fontSize: '18px' }"
          :row-style="getEvenOrOddStyle"
        >
          <el-table-column
            :align="item.align"
            :minWidth="item.minWidth"
            v-for="(item, index) in columns"
            :key="index"
            :prop="item.prop"
            :label="item.label"
          >
          </el-table-column>
        </el-table>

        <div class="pagination">
          <el-pagination background layout="prev, pager, next" :total="1000"> </el-pagination>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ZxhSearch from '../components/ZxhSearch.vue';
const columns = [
  {
    label: '序号',
    prop: 'index',
    key: 'index',
    align: 'center',
  },
  {
    label: '问题描述',
    prop: 'name',
    key: 'name',
    align: 'center',
    minWidth: 300,
    isShow: true,
    sType: 'input',
  },
  {
    label: '责任单位',
    prop: 'dept',
    key: 'dept',
    align: 'center',
    isShow: true,
    sType: 'select',
    selectVal: [],
  },
  {
    label: '整改措施',
    prop: 'cuoshi',
    key: 'cuoshi',
    align: 'center',
    minWidth: 300,
    isShow: true,
    sType: 'input',
  },
  {
    label: '状态',
    prop: 'type',
    key: 'type',
    align: 'center',
  },
];
export default {
  components: {
    ZxhSearch,
  },
  data() {
    return {
      columns,
      datalist: [
        {
          index: '1',
          name: '防火设备问题隐患',
          dept: '一工厂',
          cuoshi: '修复防火设备',
          type: '已整改',
        },
        {
          index: '2',
          name: '防火设备问题隐患',
          dept: '一工厂',
          cuoshi: '修复防火设备',
          type: '已整改',
        },
        {
          index: '3',
          name: '防火设备问题隐患',
          dept: '一工厂',
          cuoshi: '修复防火设备',
          type: '已整改',
        },
        {
          index: '4',
          name: '防火设备问题隐患',
          dept: '一工厂',
          cuoshi: '修复防火设备',
          type: '已整改',
        },
        {
          index: '5',
          name: '防火设备问题隐患',
          dept: '一工厂',
          cuoshi: '修复防火设备',
          type: '已整改',
        },
        {
          index: '6',
          name: '防火设备问题隐患',
          dept: '一工厂',
          cuoshi: '修复防火设备',
          type: '已整改',
        },
        {
          index: '7',
          name: '防火设备问题隐患',
          dept: '一工厂',
          cuoshi: '修复防火设备',
          type: '已整改',
        },
        {
          index: '8',
          name: '防火设备问题隐患',
          dept: '一工厂',
          cuoshi: '修复防火设备',
          type: '已整改',
        },
        {
          index: '9',
          name: '防火设备问题隐患',
          dept: '一工厂',
          cuoshi: '修复防火设备',
          type: '已整改',
        },
      ],
      tolnum: 6,
      queryForm: {
        pageSize: 10,
        pageNum: 1,
      },
    };
  },
  methods: {
    getClass(e) {
      if (e / 2 == parseInt(e / 2)) {
        return 'evenRowColorSet';
      } else {
        return 'oddRowColorSet';
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleReset() {
      this.queryForm = {
        pageNum: 1,
        pageSize: 10,
      };
    },
    hanleSelect(v) {
      this.queryForm = {
        pageNum: 1,
        pageSize: 10,
      };
      if (Object.keys(v).length != 0) {
        this.queryForm = Object.assign(this.queryForm, v);
      }
    },
    handleSearch() {
      this.queryForm = {
        pageNum: 1,
        pageSize: 10,
      };
    },
	onSearch(){
		this.datalist=[
        {
          index: '1',
          name: '外墙脱落',
          dept: '生产科',
          cuoshi: '重新粉刷',
          type: '已整改',
        },
        {
          index: '2',
          name: '高温环境作业',
          dept: '生产科',
          cuoshi: '配备防暑降温日用品',
          type: '已整改',
        },
        {
          index: '3',
          name: '有辐射作业风险',
          dept: '生产科',
          cuoshi: '作业过程在铅制作业区进行',
          type: '已整改',
        },
        {
          index: '4',
          name: '电路有火灾隐患',
          dept: '生产科',
          cuoshi: '更换4cm纯铜线缆',
          type: '已整改',
        },
        {
          index: '5',
          name: '湿度过大，易造成机械损坏',
          dept: '生产科',
          cuoshi: '使用ZC-03油脂涂料喷涂机械传动设备',
          type: '已整改',
        },
        {
          index: '6',
          name: '预制板出现龟裂纹',
          dept: '生产科',
          cuoshi: '修复预制板裂纹，并减少承重',
          type: '已整改',
        },
        {
          index: '7',
          name: '粉尘超标',
          dept: '生产科',
          cuoshi: '增加排风设备',
          type: '已整改',
        },
        {
          index: '8',
          name: '有毒气体积累',
          dept: '生产科',
          cuoshi: '定期进行体检',
          type: '已整改',
        },
        {
          index: '9',
          name: '移动滑轮组变形',
          dept: '生产科',
          cuoshi: '更换变形滑轮，并进行地面自流平作业',
          type: '已整改',
        },
      ]
	},
    getEvenOrOddStyle({ rowIndex }) {
      if (rowIndex % 2 == 0) {
        return { textAlign: 'center', backgroundColor: '#07357f', color: '#ffffff', fontSize: '18px' };
      } else {
        return { textAlign: 'center', backgroundColor: '#06418f', color: '#ffffff', fontSize: '18px' };
      }
    },
  },
};
</script>
<style scoped>
.hello {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #000000;
}

.z-pagetop {
  width: 100%;
  height: 5.5rem;
  /* background-image: url(../assets/img/topbg.png); */
  background-size: 100% 100%;
  text-align: center;
}

.pagecenter {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pagetop {
  height: 5.5rem;
  display: flex;
  justify-content: space-between;
}

.z-pagenav {
  height: 4.0625rem;
  line-height: 4.0625rem;
}

.z-pagenav button {
  padding: 0 20px;
  height: 4.0625rem;
  background: none;
  border: none;
  font-size: 1.125rem;
  cursor: pointer;
}

.z-pagetitle {
  height: 5.5rem;
  line-height: 5.5rem;
  font-size: 1.5rem;
  color: #000000;
}

.subtitle {
  text-align: left;
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 38px;
  color: #ffffff;
}

.z-content {
  padding: 60px;
  margin-top: 1.5625rem;
  background-image: linear-gradient(#3676dcab, #07357fab);
  box-shadow: #07357fab 0px 0px 10px;
  margin: 60px;
  border-radius: 20px;
  height: 100%;
  overflow-y: scroll;
}

.z-table {
  width: 100%;
  margin-top: 2rem;
}

.pagination {
  width: 100%;
  margin-top: 1.75rem;
  display: flex;
  justify-content: flex-end;
  padding: 20px 0px;
  font-size: 18p x;
}
.tableMouseOn ::v-deep .el-table__body tr:hover > td {
  background-color: #1860c0 !important;
  color: white;
}
</style>
