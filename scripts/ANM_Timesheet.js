/*
    File name: ANM_Timesheet
    Author: Ramos Jesús
*/


/* Controls' behavior*/

$(document).ready(function () {

    $("#BtnAddRow").click(function () {
        $('#TblTimesheet').append('<tr name="TrTimesheetRow"><td><input type="checkbox" name="ChkTimesheetSelectedRow" /></td><td><input type="text" name="TxtTimesheetProjectNameRow" /></td><td><input type="text" name="ChkTimesheetWorkDescriptionRow" /></td><td><input type="number" min="0.5" step="0.5" name="ChkTimesheetHoursWorkedRow" /></td></tr>');
    });

    $("#BtnRemoveRows").click(function () {
        $('input:checkbox[name=ChkTimesheetSelectedRow]:checked').each(function () {
            $(this).closest('tr').remove();
        });
    });

    $("#BtnCancelTimesheet").click(function () {
        $("#TblTimesheet").children(':not(thead)').remove();
        $('.PersonalData').each(function () {
            $(this).val("");
        });
    });

    $("#BtnSubmitTimesheet").click(function () {
        alert('BtnSubmitTimesheet');
    });

    $("#BtnSubmitTimesheet").click(function () {
        alert('BtnSubmitTimesheet');
    });

    $('input:text').each(function () {
        $(this).closest('tr').remove();
    });

});


