let count = 0

export const sharedCount = () => {
  count++
  return count
}

export const printSharedCount = (env: string) => {
  console.log(
    `sharedFunctionCount in ${env}: ${sharedCount()}. This should print 1 on both times to show that content, popup and background all have different versions of the shared script`
  );
}

export enum Env {
  Popup = "Popup",
  Content = "Content",
  Background = "Background",
}