<template>
  <el-dialog
    title="How To"
    :visible.sync="DhowToDialogVisible"
    width="40%">
    <span>1. </span>
    <span>2. </span>
    <span>3. </span>
    <span>4. </span>
    <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">OK</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false
      };
    }
  };
</script>