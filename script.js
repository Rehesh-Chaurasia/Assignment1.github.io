// For Add row to Top
var sNo = 1;
$(document).ready(function () {
    $(".add-row-top").click(function () {
        row = "<tr><th>"+ sNo +"<td><td><td><td> " 
         "</th></td></td></td></td></tr>";
        tableBody = $("table thead");
        tableBody.append(row);
        sNo++;
        
  // For Adjustment of Serial Number
var addSNo = function () {
    $('table tr').each(function(sNo) {
        $(this).find('td:nth-child(1)').html(sNo++);
    });
};
    addSNo();
});
});


// For Add row to Bottom
$(document).ready(function () {
    var sNo=5;  
    $(".add-row-bottom").click(function () {
        row = "<tr><th>"+sNo+"<td>Mark<td>Zuckerberg<td>New York<td>U.S.A " 
             "</th></td></td></td></td></tr>";
        tableBody = $("table tbody");
        tableBody.append(row);
        sNo++;
        
        var addSerialNumber = function () {
            var i = 0
            $('table tr').each(function(index) {
                $(this).find('td:nth-child(1)').html(sN++);
            });
        };
        
        addSerialNumber()
    
    });
});




      