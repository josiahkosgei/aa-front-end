
export enum ComplaintCategory {
    None="None",
    wrongPrescription="wrongPrescription",
    openedLate="openedLate",
    badReceipts="badReceipts",
    lateCheckIn="lateCheckIn",
    delayInLab="delayInLab",
    carelessWasteDisposal="carelessWasteDisposal",
}
export const ComplaintCategoryLabel = new Map<string, string>([
    [ComplaintCategory.None, 'None'],
    [ComplaintCategory.wrongPrescription, 'Wrong Prescription'],
    [ComplaintCategory.openedLate, 'Opened Late'],
    [ComplaintCategory.badReceipts, 'Bad Receipts'],
    [ComplaintCategory.lateCheckIn, 'Late Check In'],
    [ComplaintCategory.carelessWasteDisposal, 'Careless Waste Disposal'],
    [ComplaintCategory.delayInLab, 'Delay In Lab'],
  ]);