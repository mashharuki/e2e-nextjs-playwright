import prisma from '.'

/**
 * noteを一覧を取得するメソッド
 * @returns 
 */
export async function getNotes() {
  try {
    const notes = await prisma.note.findMany()
    return { notes }
  } catch (error: any) {
    return { error }
  }
}
