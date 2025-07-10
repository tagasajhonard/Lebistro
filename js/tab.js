function filterInventory(type, button) {
  // Reset all buttons
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active-tab');
  });

  // Activate selected
  if (button) {
    button.classList.add('active-tab');
  }

  // Filter table rows
  const rows = document.querySelectorAll('#inventoryBody tr');
  rows.forEach(row => {
    const stock = row.getAttribute('data-stock');
    row.style.display = (type === 'all' || stock === type) ? '' : 'none';
  });
}

window.onload = () => {
  const allTab = document.querySelector('.tab-button.active-tab');
  filterInventory('all', allTab);
};

function toggleSidebar() {
    const sidebar = document.getElementById('mobileSidebar');
    sidebar.classList.toggle('hidden');
  }


