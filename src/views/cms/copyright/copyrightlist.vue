<template>
<!--  <div class="box">-->
<!--    <div class="left">-->
<!--      <el-tooltip class="item" effect="dark" content="版权列表"  placement="right-start">-->
<!--        <el-button>版权列表</el-button>-->
<!--      </el-tooltip>-->
<!--    </div>-->
<!--  </div>-->
  <div id="app-container">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="版权名">
        <el-input v-model="copyrightQuery.name" placeholder="版权名" />
      </el-form-item>
      <el-form-item label="公司名">
        <el-input v-model="copyrightQuery.name" placeholder="公司名" />
      </el-form-item>
      <el-form-item label="备注名">
        <el-input v-model="copyrightQuery.name" placeholder="备注名" />
      </el-form-item>
      <el-button type="primary" @click="getFindPageBook()">查询</el-button>
      <el-button type="primary" @click="resetData()">清空</el-button>
      <router-link :to="'/cms/book/save'">
        <el-button type="primary">添加版权</el-button>
      </router-link>
    </el-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      copyrightQuery: { // ##查询条件封装对象
      }
    }
  }
}
</script>
<style>
  .box {
    width: 400px;

  .top {
    text-align: center;
  }

  .left {
    float: left;
    width: 60px;
  }

  .right {
    float: right;
    width: 60px;
  }

  .bottom {
    clear: both;
    text-align: center;
  }

  .item {
    margin: 4px;
  }

  .left .el-tooltip__popper,
  .right .el-tooltip__popper {
    padding: 8px 10px;
  }
  }
</style>
