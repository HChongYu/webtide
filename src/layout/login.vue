<template>
  <div class="">
    <el-form
      ref="formRef"
      :inline="true"
      :model="formData"
      :rules="formRules"
      :inline-message="true"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="formData.name" placeholder="请填写您的账号" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="formData.password" placeholder="请填写您的密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(formRef)">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script  lang="ts">
import { siteInfo } from "@/api/login";
import type { FormInstance, FormRules } from "element-plus";
import { defineComponent, onMounted, reactive, ref } from "vue";

export default defineComponent({
  name: "login",
  setup() {
    // type key = "name"|"password";
    onMounted((): void => {
      // console.log("mounted!");
      siteInfo()
        .then((result: any) => {
          console.log('ss');
          console.log(result);
        })
        .catch((err: any) => {
          console.log(err);
        });
    });

    const formRef = ref<FormInstance>();

    const formData = reactive({
      name: "",
      password: "",
    });

    const formRules = reactive<FormRules>({
      mame: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: ["blur"],
        },
        {
          required: true,
          min: 3,
          max: 5,
          message: "Length should be 3 to 5",
          trigger: "change",
        },
      ],
      password: [
        {
          required: true,
          message: "密码为必填",
          trigger: "change",
        },
      ],
    });

    const onSubmit = (formEl: FormInstance | undefined): void | undefined => {
      console.log(formEl);
      if (!formEl) return;
      formEl.validate((vali, fields) => {
        if (vali) {
          console.log(vali, fields);
        } else {
          console.log(vali);
        }
      });
    };

    return {
      formRef,
      formData,
      formRules,
      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>