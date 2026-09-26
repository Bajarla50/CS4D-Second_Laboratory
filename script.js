function switchProfile() {
    const profile = document.getElementById('profileSelect').value;
    const hintPanel = document.getElementById('hintPanel');
    const aiPanel = document.getElementById('aiPanel');
    const modelAttributes = document.getElementById('modelAttributes');
    
    if (profile === 'beginner') {
        hintPanel.classList.remove('hidden');
        aiPanel.classList.add('hidden');
        modelAttributes.innerHTML = `
            <li>Experience: Beginner</li>
            <li>Formatting: High (Auto-format enabled)</li>
            <li>AI Assistance: Low</li>
        `;
    } else {
        hintPanel.classList.add('hidden');
        aiPanel.classList.remove('hidden');
        modelAttributes.innerHTML = `
            <li>Experience: Advanced</li>
            <li>Formatting: Low (Manual control)</li>
            <li>AI Assistance: High</li>
        `;
    }
}

function runCode() {
    let code = document.getElementById('codeEditor').value;
    const profile = document.getElementById('profileSelect').value;
    
    if (profile === 'beginner') {
        // Simulate auto-formatting for beginner
        code = code.trim().replace(/\s+/g, ' ');
        document.getElementById('output').innerText = "Output [Auto-Formatted]: " + code;
    } else {
        document.getElementById('output').innerText = "Output [Raw Execution]: " + code;
    }
}

function triggerAI() {
    const query = document.getElementById('aiPrompt').value;
    document.getElementById('aiResponse').innerText = "AI Generated Suggestion for: \"" + query + "\" -> Code optimized and refactored successfully!";
}
