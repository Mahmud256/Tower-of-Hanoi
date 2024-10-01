const towers = document.querySelectorAll('.tower');
let selectedDisk = null;
let selectedTower = null;

towers.forEach(tower => {
  tower.addEventListener('click', () => {
    const disks = tower.querySelectorAll('.disk');
    const topDisk = disks[disks.length - 1];

    if (selectedDisk) {
      const topDiskInTarget = tower.querySelector('.disk:last-child');
      
      if (!topDiskInTarget || selectedDisk.dataset.size < topDiskInTarget.dataset.size) {
        tower.appendChild(selectedDisk);
        selectedDisk = null;
        selectedTower = null;
        document.getElementById('message').textContent = '';

        // Check if all disks are in the third tower
        if (document.getElementById('tower4').childElementCount === 5) {
          document.getElementById('message').textContent = 'You Won!';
        }
      } else {
        document.getElementById('message').textContent = 'You cannot place a larger disk on a smaller one.';
      }
    } else if (topDisk) {
      selectedDisk = topDisk;
      selectedTower = tower;
      document.getElementById('message').textContent = 'Disk selected. Click another tower to move.';
    }
  });
});
