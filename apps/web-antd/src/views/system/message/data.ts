import type { FormSchemaGetter, VxeGridProps } from '#/adapter';

import { DictEnum } from '@vben/constants';
import { getPopupContainer } from '@vben/utils';

import { getDictOptions } from '#/utils/dict';
import { renderDict } from '#/utils/render';

export const querySchema: FormSchemaGetter = () => [
  {
    component: 'Input',
    fieldName: 'configName',
    label: '参数名称',
  },
  {
    component: 'Input',
    fieldName: 'configKey',
    label: '参数键名',
  },
  {
    component: 'Select',
    componentProps: {
      getPopupContainer,
      options: getDictOptions(DictEnum.SYS_YES_NO),
    },
    fieldName: 'configType',
    label: '系统内置',
  },
  {
    component: 'RangePicker',
    fieldName: 'createTime',
    label: '创建时间',
  },
];

export const columns: VxeGridProps['columns'] = [
  { type: 'checkbox', width: 60 },
  {
    title: '用户名称',
    field: 'userName',
  },
  {
    title: '消息内容',
    field: 'content',
  },
  {
    title: '扣除费用',
    field: 'deductCost',
  },

  {
    title: '累计Tokens',
    field: 'totalTokens',
  },
  {
    title: '模型名称',
    field: 'modelName',
  },
  {
    title: '创建时间',
    field: 'createTime',
  },
  {
    field: 'action',
    fixed: 'right',
    slots: { default: 'action' },
    title: '操作',
    width: 180,
  },
];

export const modalSchema: FormSchemaGetter = () => [
  {
    component: 'Input',
    dependencies: {
      show: () => false,
      triggerFields: [''],
    },
    fieldName: 'configId',
    label: '参数主键',
  },
  {
    component: 'Input',
    fieldName: 'configName',
    label: '参数名称',
    rules: 'required',
  },
  {
    component: 'Input',
    fieldName: 'configKey',
    label: '参数键名',
    rules: 'required',
  },
  {
    component: 'Input',
    fieldName: 'configValue',
    label: '参数键值',
    rules: 'required',
  },
  {
    component: 'RadioGroup',
    componentProps: {
      buttonStyle: 'solid',
      options: getDictOptions(DictEnum.SYS_YES_NO),
      optionType: 'button',
    },
    defaultValue: 'N',
    fieldName: 'configType',
    label: '是否内置',
    rules: 'required',
  },
  {
    component: 'Textarea',
    fieldName: 'remark',
    formItemClass: 'items-baseline',
    label: '备注',
  },
];
