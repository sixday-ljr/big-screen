<template>
  <div class="select_style">
    <el-form-item v-if="condition.length != 0">
      <div v-for="(cItem, cIndex) in condition" :key="cIndex" style="display: flex; margin-top: 5px">
        <el-select v-model="cItem.cProp" placeholder="请选择" clearable @change="handleSelect($event, cIndex)">
          <el-option
            v-for="(sItem, sIndex) in sColumns"
            :key="sIndex"
            v-show="sItem.isShow"
            :label="sItem.label"
            :value="sItem.key"
          ></el-option>
        </el-select>
        <el-input
          v-if="cItem.cType === 'input'"
          v-model="cItem.cVal"
          placeholder="请输入"
          clearable
          @input="handleInput"
          style="width: 48%; margin-left: 10px"
        />
        <el-date-picker
          v-if="cItem.cType === 'time'"
          :type="cItem.cDateType"
          v-model="cItem.cVal"
          :format="cItem.cDateType ? 'yyyy' : 'yyyy-MM-dd'"
          :value-format="cItem.cDateType ? 'yyyy' : 'yyyy-MM-dd'"
          placeholder="请选择日期"
          clearable
          style="width: 48%; margin-left: 10px"
          @blur="handleTime"
        ></el-date-picker>
        <el-date-picker
          v-if="cItem.cType === 'daterange'"
          type="daterange"
          v-model="cItem.cVal"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          clearable
          style="width: 48%; margin-left: 10px"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          @blur="handleTime"
        ></el-date-picker>
        <el-select
          v-if="cItem.cType === 'select'"
          v-model="cItem.cVal"
          placeholder="请选择"
          clearable
          style="width: 48%; margin-left: 10px"
          @change="$forceUpdate()"
        >
          <el-option
            v-for="(csItem, csIndex) in cItem.cSelectVal"
            :key="csIndex"
            :label="csItem.label"
            :value="csItem.val"
          ></el-option>
        </el-select>
        <el-button
          v-if="condition.length > 1"
          icon="el-icon-remove"
          type="danger"
          @click="handleDelcondition(cIndex)"
          style="margin-left: 10px"
          >{{ addcondition }}</el-button
        >
      </div>
    </el-form-item>
    <el-form-item style="margin-top: 5px">
      <el-button icon="el-icon-plus" type="info" @click="handleAddcondition">{{ addcondition }}</el-button>
      <el-button icon="el-icon-search" type="primary" @click="handleSearch">查询</el-button>
      <el-button icon="el-icon-refresh" type="primary" @click="handleReset">重置</el-button>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'ZxhSearch',
  props: {
    sColumns: {
      type: Array,
      default: () => {
        return [];
      },
    },
    search: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      addcondition: '点击添加查询条件',
      condition: [],
    };
  },
  methods: {
    handleDelcondition(ind) {
      console.log(ind);
      this.condition.splice(ind, 1);
    },
    handleAddcondition() {
      this.addcondition = '';
      this.condition.push({});
    },
    handleInput() {
      this.$forceUpdate();
    },
    handleTime() {
      this.$forceUpdate();
    },
    handleSelect(e, ind) {
      let sJson = this.sColumns.find((item) => item.key == e);
      console.log(sJson);
      let cJson = this.condition.find((item) => item.cLabel == sJson.label);
      if (cJson != undefined) {
        if (cJson.cLabel && cJson.cLabel !== '' && cJson !== '') {
          this.msgError('不可以选择相同的查询条件！');
          this.condition.splice(ind, 1);
          return false;
        }
      }
      this.condition[ind].cLabel = sJson.label;
      this.condition[ind].cProp = sJson.key;
      this.condition[ind].cType = sJson.sType;
      if (sJson.dateType) {
        this.condition[ind].cDateType = sJson.dateType;
      }
      if (sJson.sType === 'select') {
        if (sJson.selectVal && sJson.selectVal.length != 0) {
          this.condition[ind].cSelectVal = sJson.selectVal;
        }
      } else if (sJson.sType === 'time') {
        if (sJson.timeVal && sJson.timeVal !== '') {
          this.condition[ind].cVal = sJson.timeVal;
        }
      } else {
        this.condition[ind].cVal = '';
      }
      // this.condition[ind].cVal = ''
    },
    handleSearch() {
      if (this.search) {
        this.search();
      }
    },
    handleReset() {
      this.addcondition = '点击添加查询条件';
      this.$emit('change-queryForm', {});
      this.condition = [];
      this.$emit('cwbreset', '');
    },
  },
};
</script>
