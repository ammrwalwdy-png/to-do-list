const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

// إضافة مهمة
function addTask() {
    const taskText = taskInput.value.trim();

    // منع إضافة مهمة فارغة
    if (taskText === "") {
        return;
    }

    // إنشاء عنصر المهمة
    const li = document.createElement("li");

    // إنشاء النص
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;

    // إنشاء الأزرار
    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "task-buttons";

    // زر تم
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.className = "done-btn";

    doneBtn.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // زر حذف
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateMessage();
    });

    // إضافة الأزرار لبعض
    buttonsDiv.append(doneBtn, deleteBtn);

    // إضافة العناصر للمهمة
    li.append(span, buttonsDiv);

    // إضافة المهمة للقائمة
    taskList.appendChild(li);

    // تفريغ input
    taskInput.value = "";

    // تحديث الرسالة
    updateMessage();
}

// تحديث الرسالة
function updateMessage() {
    if (taskList.children.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}

// الضغط على زر الإضافة
addBtn.addEventListener("click", addTask);

// الإضافة باستخدام Enter
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});