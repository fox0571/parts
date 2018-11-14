<template>
  <el-form :label-position="labelPosition" label-width="100px" :model="unitForm" ref="unitForm">
    <el-form-item label="Model">
        <el-input v-model="unitForm.model"></el-input>
    </el-form-item>
    <el-form-item label="Name">
        <el-input v-model="unitForm.name_eng"></el-input>
    </el-form-item>
    <el-form-item label="中文名称">
        <el-input v-model="unitForm.name_chn"></el-input>
    </el-form-item>
    <el-form-item label="Dimension">
        <el-input v-model="unitForm.dimension"></el-input>
    </el-form-item>
    <el-form-item label="Specification">
        <el-input v-model="unitForm.spec"></el-input>
    </el-form-item>
    <el-button type="primary" >Cancel</el-button>
    <el-button type="primary" @click="submitForm('unitForm')">Submit</el-button>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        unitForm: {
          part:[],
          model: '',
          name_eng: '',
          name_chn: '',
          dimension: '',
          spec: '',
        }
      };
    },
    methods:{
        submitForm(formName){
        let uri="unit/";
        let body=this.unitForm;
        this.$http.post(uri,body)
        .then(response => {
            Console.log(response);
            this.fetchItems();
        })
    },
    }
  }
</script>