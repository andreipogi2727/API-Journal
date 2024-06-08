// script.js

$(document).ready(function () {
    if (window.location.pathname.includes('firstPage.html') || window.location.pathname === '/') {
        initFirstPage();
    } else if (window.location.pathname.includes('secondPage.html')) {
        initSecondPage();
    }
});

function initFirstPage() {
    console.log("firstPage.html loaded");

    // Initialize first page specific functionality
    $('#createButton').on('click', setPageFirst);
    $('#journalButton').on('click', setPageSecond);

    // Add other first page specific functionality here
}

function initSecondPage() {
    console.log("secondPage.html loaded");

    // Initialize second page specific functionality
    $('#createButton').on('click', setPageFirst);
    $('#journalButton').on('click', setPageSecond);

    fetchJournals();

    function fetchJournals() {
        $.ajax({
            url: 'http://localhost:3000/journals',
            method: 'GET',
            dataType: 'json',
            success: function (journals) {
                const journalListDiv = $('#journalList');

                journalListDiv.empty(); // Clear previous content

                $.each(journals, function (index, value) {
                    const journalDiv = $('<div class="container">');
                    journalDiv.html(`
                        <div class="entry">
                            <h2 class="date"> ${new Date(value.createdAt).toLocaleString()}</h2>
                            <img class="img" src="${value.image}" width="200" height="200">
                            <p>Day Rating: ${value.rate}</p>
                            <p>Summary: ${value.summary}</p>
                            <p>Goals: ${value.goals}</p>
                            <button class="delete-button" onclick="deleteJournal('${value._id}')">Delete</button>
                        </div>
                    `);
                    
                    journalListDiv.append(journalDiv);
                });
            },
            error: function (error) {
                console.error('Error fetching journals:', error);
            }
        });
    }

    // Function to delete a journal entry
    window.deleteJournal = function (id) {
        $.ajax({
            url: `http://localhost:3000/journals/${id}`,
            method: 'DELETE',
            success: function () {
                fetchJournals();
            },
            error: function (error) {
                console.error('Error deleting journal:', error);
            }
        });
    }

    // Function to sort journals based on field and order
    window.sortJournals = function (field, order) {
        $.ajax({
            url: `http://localhost:3000/journals/sort/${field}/${order}`,
            method: 'GET',
            dataType: 'json',
            success: function (journals) {
                const journalListDiv = $('#journalList');

                journalListDiv.empty(); // Clear previous content

                $.each(journals, function (index, value) {
                    const journalDiv = $('<div class="container">');
                    journalDiv.html(`
                        <div class="entry">
                            <h2 class="date"> ${new Date(value.createdAt).toLocaleString()}</h2>
                            <img class="img" src="${value.image}" width="200" height="200">
                            <p>Day Rating: ${value.rate}</p>
                            <p>Summary: ${value.summary}</p>
                            <p>Goals: ${value.goals}</p>
                            <button class="delete-button" onclick="deleteJournal('${value._id}')">Delete</button>
                        </div>
                    `);
                    journalListDiv.append(journalDiv);
                });
            },
            error: function (error) {
                console.error('Error fetching sorted journals:', error);
            }
        });
    }
}

function saveJournal() {
    var rateValue = $('#rate').val();
    var summaryValue = $('#summary').val();
    var goalsValue = $('#goals').val();
    var imageValue = $('#image').val();

    const newJournal = {
        rate: rateValue,
        summary: summaryValue,
        goals: goalsValue,
        image: imageValue
    };

    $.ajax({
        url: 'http://localhost:3000/journals',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(newJournal),
        success: function () {
            alert('Successfully saved');
        },
        error: function (error) {
            alert('Finish the journal');
            console.error('Error creating journal:', error);
        }
    });
}

function setPageSecond() {
    console.log("Navigating to second page");
    window.location.href = 'secondPage.html';
}

function setPageFirst(){
    console.log("Navigating to first page");
    window.location.href = 'firstPage.html';
}

// Function to handle image drop
function handleDrop(event) {
    event.preventDefault();
    var imageFile = event.dataTransfer.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
        $('#selectedImage').attr('src', event.target.result);
        $('#imageDisplay img').css('display', 'block');
    };

    reader.readAsDataURL(imageFile);
}

// Function to handle drag over
function handleDragOver(event) {
    event.preventDefault();
}
