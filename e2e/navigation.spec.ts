import { expect, test } from '@playwright/test'

/**
 * ナビゲーションのためのテスト
 * ナビゲーションバーのリンクをクリックして、各セグメントに移動
 */
test('Shall navigate between nav bar by links', async ({ page }) => {
  await page.goto('/')
  // 初期ページの確認 Hello World🚀 という言葉があるかチェックする
  await expect(page.getByRole('heading')).toHaveText('Hello World🚀')
  // nav to fetch-cc segment
  await page.getByRole('link', { name: 'CC_Fetch' }).click()
  // CC_Fetchセグメントのヘッダーが表示されることを確認 Notes page by CCという言葉があるかチェックする
  await expect(page.getByRole('heading')).toHaveText('Notes page by CC')
  // nav to fetch-sc segment
  await page.getByRole('link', { name: 'SC_Fetch' }).click()
  // SC_Fetchセグメントのヘッダーが表示されることを確認 Notes page by SCという言葉があるかチェックする
  await expect(page.getByRole('heading')).toHaveText('Notes page by SC')
  // nav to todo-crud segment
  await page.getByRole('link', { name: 'CRUD' }).click()
  // todo-crudセグメントのヘッダーが表示されることを確認 Click a title on the left to view detail !という言葉があるかチェックする
  await expect(page.getByRole('heading')).toHaveText(
    'Click a title on the left to view detail !'
  )
})
