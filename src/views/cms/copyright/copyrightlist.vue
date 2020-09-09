<template>

  <div id="app-container">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="">
      </el-form-item>
      <el-form-item label="版权列表">
      </el-form-item>
    </el-form>
    <!--查询表单-->
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
    <!-- 列表 -->
    <el-table :data="copyrightlist" border fit highlight-current-row>
      <el-table-column label="序号" width="70" align="center">
        <template slot-scope="scope">
          {{ (pageNo - 1) * pageSize + scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="copyrightName" label="版权名"/>
      <el-table-column prop="companyName" label="公司名" />
      <el-table-column prop="noteName" label="备注名" />
      <el-table-column prop="" label="上线数量" width="120"/>
      <el-table-column prop="" label="未上线数量" width="120"/>
      <el-table-column prop="" label="即将过期数量" width="120"/>
      <el-table-column label="合作状态" width="120">
        <template slot-scope="scope">
          {{ scope.row.cooperationStatus === 1 ? '生效' : '无效' }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="danger" size="mini" @click="deleteBook(scope.row.id, scope.row.status)">删除</el-button>
          <router-link :to="'/cms/book/update/'+scope.row.id">
            <el-button type="primary" size="mini" >修改</el-button>
          </router-link>
          <el-button  type="danger" size="mini" icon="el-icon-delete">管理客户</el-button>

        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import copyright from '@/api/cms/copyright'

export default {
  data() {
    return {
      copyrightlist: [],
      copyrightQuery: { // ##查询条件封装对象
      },
      total: 0, // ## 总记录数
      pageNo: 1, // ## 页码
      pageSize: 5 // ## 每页显示记录数
    }
  },
  created() {
    this.getFindPageCopyright()
  },
  methods: { // ## 创建具体的方法,调用 copyright.js 定义的方法
    getFindPageCopyright(pageNo = 1) {
      this.pageNo = pageNo
      copyright.findPageCopyright(this.pageNo,this.pageSize,this.copyrightQuery)
        .then(response => {
          this.copyrightlist = response.data.items
          this.total = response.data.total
          // this.currentTime = this.format(new Date(), 'yyyy-MM-dd HH:mm:ss')
        })
    }
  }
}
</script>

