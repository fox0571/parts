
<template>
  <el-form :label-position="labelPosition" label-width="100px" :model="poForm" ref="poForm">
    <el-form-item label="Quantity">
        <el-input v-model="poForm.qty"></el-input>
    </el-form-item>
    <el-form-item label="Branch">
        <el-select v-model="poForm.branch" placeholder="Select a branch">
            <el-option
            v-for="item in branches"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled">
            </el-option>
        </el-select>
    </el-form-item>
    <el-button type="primary" @click="close()">Cancel</el-button>
    <el-button type="primary" @click="submitForm('poForm')">Submit</el-button>
  </el-form>
</template>

<script>

  export default {
    props: {
      id: Number,
    },
    data() {
      return {
        labelPosition: 'right',
        branches:[{
          value: 'Brea',
          label: 'HQ, Brea, CA'
        },{
          value: 'Hayward',
          label: 'Hayward, CA'
        },{
          value: 'Dallas',
          label: 'Dallas, TX'
        },{
          value: 'Houston',
          label: 'Houston, TX'
        },{
          value: 'Washington',
          label: 'Kent, WA'
        },{
          value: 'Colorado',
          label: 'Aurora, CO'
        },{
          value: 'Florida',
          label: 'Tampa, FL'
        },{
          value: 'Illinois',
          label: 'Homer Glen, IL'
        },{
          value: 'Georgia',
          label: 'Doraville, GA'
        },{
          value: 'New Jersey',
          label: 'Fairfield, NJ'
        },{
          value: 'Massachusetts',
          label: 'Westborough, MA'
        },{
          value: 'Ohio',
          label: 'Groveport, OH'
        }],
        poForm: {
          part: this.id,
          qty: 5,
          branch: '',
        }
      };
    },
    methods:{
      submitForm(formName){
        let uri="po/";
        this.poForm.part=this.id;
        console.log(this.poForm.part)
        let body=this.poForm;
        console.log(body);
        this.$http.post(uri,body)
        .then(response => {
            alert("success!");
            this.close();
        })
      },
      close(){
        //console.log(this.id);
        this.$emit('cancel');
      }
    }
  }
</script>