/**
 * AI Claims Processing Demo - Fully Working Enterprise System
 * Fixed database table population and ribbon functionality
 */

class EnterpriseClaimsDemo {
    constructor() {
        this.completedParts = [];
        this.isProcessing = false;
        this.currentResultCard = 0;
        this.resultCards = [];
        
        // Realistic document data
        this.documents = [
            {
                id: 'fnol',
                name: 'FNOL_Intake_Martinez_2025-04-23.pdf',
                type: 'FNOL Report',
                status: 'Approved',
                author: 'System Generated',
                uploaded: '04/23/2025 2:47 PM',
                tags: ['Family dynamics', 'Age-related risks', 'Minor involvement', 'Specialized protocols']
            },
            {
                id: 'police',
                name: 'Police_Report_PRD-558821_Martinez.pdf',
                type: 'Police Report',
                status: 'Approved',
                author: 'Officer J. Smith',
                uploaded: '04/23/2025 4:15 PM',
                tags: ['Speed factor', 'Clear liability', 'Criminal element', 'Property damage']
            },
            {
                id: 'medical',
                name: 'Medical_Records_Emergency_SGH_Martinez.pdf',
                type: 'Medical Records',
                status: 'Approved',
                author: 'Dr. Sarah Chen, MD',
                uploaded: '04/23/2025 6:22 PM',
                tags: ['Diabetic complications', 'Surgical requirements', 'Growth concerns', 'Age factors']
            },
            {
                id: 'photos',
                name: 'Damage_Assessment_Photos_Martinez_Case.zip',
                type: 'Visual Evidence',
                status: 'Approved',
                author: 'Adjuster K. Williams',
                uploaded: '04/24/2025 9:30 AM',
                tags: ['High repair costs', 'Impact analysis', 'Safety systems', 'Total loss likely']
            }
        ];
        
        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    init() {
        console.log('Initializing demo...');
        this.setupDatabase();
        this.bindEvents();
        console.log('Demo initialized successfully');
    }

    setupDatabase() {
        console.log('Setting up database table...');
        
        const tbody = document.getElementById('documentsTableBody');
        if (!tbody) {
            console.error('Table body not found!');
            return;
        }
        
        // Clear existing content
        tbody.innerHTML = '';
        
        // Add each document row
        this.documents.forEach((doc, index) => {
            console.log(`Adding document ${index + 1}:`, doc.name);
            
            const row = document.createElement('tr');
            row.id = `row-${doc.id}`;
            
            row.innerHTML = `
                <td>
                    <div class="status-indicator pending" id="status-${doc.id}"></div>
                </td>
                <td>
                    <div class="doc-name">${doc.name}</div>
                </td>
                <td>
                    <div class="action-icons">
                        <div class="action-icon" title="View">👁</div>
                        <div class="action-icon" title="Download">⬇</div>
                        <div class="action-icon" title="Info">ℹ</div>
                    </div>
                </td>
                <td>${doc.type}</td>
                <td>
                    <span class="status-text approved">${doc.status}</span>
                </td>
                <td>${doc.author}</td>
                <td>${doc.uploaded}</td>
                <td class="col-ai-tags" id="tags-${doc.id}">
                    <div class="ai-tags"></div>
                </td>
            `;
            
            tbody.appendChild(row);
        });
        
        console.log(`Database setup complete - added ${this.documents.length} documents`);
    }

    bindEvents() {
        console.log('Binding events...');
        
        // Get all buttons
        const btn1 = document.getElementById('btn-part1');
        const btn2 = document.getElementById('btn-part2');
        const btn3 = document.getElementById('btn-part3');
        const btn4 = document.getElementById('btn-part4');
        const resetBtn = document.getElementById('resetDemo');
        
        // Bind Part 1 - Process Documents
        if (btn1) {
            btn1.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Process Documents clicked');
                this.runPart1();
            });
            console.log('Part 1 button bound successfully');
        } else {
            console.error('btn-part1 not found!');
        }
        
        // Bind Part 2 - Process Routing
        if (btn2) {
            btn2.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Process Routing clicked');
                this.runPart2();
            });
        }
        
        // Bind Part 3 - Analyze Patterns
        if (btn3) {
            btn3.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Analyze Patterns clicked');
                this.runPart3();
            });
        }
        
        // Bind Part 4 - Calculate Reserves
        if (btn4) {
            btn4.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Calculate Reserves clicked');
                this.runPart4();
            });
        }
        
        // Bind Reset
        if (resetBtn) {
            resetBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Reset clicked');
                this.resetDemo();
            });
        }
        
        console.log('All events bound successfully');
    }

    async runPart1() {
        console.log('Starting Part 1 - Document Processing');
        
        if (this.isProcessing) {
            console.log('Already processing, ignoring click');
            return;
        }
        
        this.isProcessing = true;
        this.updateRibbonButton('btn-part1', 'processing', 'Processing...');
        
        try {
            // Process each document sequentially
            for (let i = 0; i < this.documents.length; i++) {
                console.log(`Processing document ${i + 1}/${this.documents.length}`);
                await this.processDocument(this.documents[i], i * 1000);
            }
            
            // Wait a moment then show results
            await this.delay(1000);
            this.createDocumentAnalysisCard();
            
            // Complete part 1 and enable part 2
            this.completePart(1);
            this.enablePart(2);
            
            console.log('Part 1 completed successfully');
            
        } catch (error) {
            console.error('Error in Part 1:', error);
        } finally {
            this.isProcessing = false;
        }
    }

    async processDocument(doc, startDelay) {
        // Wait for staggered start
        await this.delay(startDelay);
        
        console.log(`Processing document: ${doc.name}`);
        
        const row = document.getElementById(`row-${doc.id}`);
        const statusIndicator = document.getElementById(`status-${doc.id}`);
        const tagsCell = document.getElementById(`tags-${doc.id}`);
        
        if (!row || !statusIndicator || !tagsCell) {
            console.error(`Missing elements for document ${doc.id}`);
            return;
        }
        
        // Start processing visual feedback
        row.classList.add('processing');
        statusIndicator.className = 'status-indicator processing';
        statusIndicator.innerHTML = '↻';
        
        // Simulate processing time
        await this.delay(2000);
        
        // Complete processing - show results
        row.classList.remove('processing');
        row.classList.add('complete');
        statusIndicator.className = 'status-indicator complete';
        statusIndicator.innerHTML = '✓';
        
        // Add AI tags
        const aiTagsContainer = tagsCell.querySelector('.ai-tags');
        if (aiTagsContainer) {
            const tagsHTML = doc.tags.map(tag => 
                `<span class="ai-tag high">${tag}</span>`
            ).join('');
            aiTagsContainer.innerHTML = tagsHTML;
        }
        
        console.log(`Completed processing: ${doc.name}`);
    }

    async runPart2() {
    console.log('Starting Part 2 - Routing');
    
    if (this.isProcessing) return;
    
    this.isProcessing = true;
    this.updateRibbonButton('btn-part2', 'processing', 'Processing...');
    
    // Show routing animation
    await this.showRoutingAnimation();
    
    this.createRoutingCard();
    this.completePart(2);
    this.enablePart(3);
    
    this.isProcessing = false;
    console.log('Part 2 completed');
}

async showRoutingAnimation() {
    const modal = document.getElementById('routingModal');
    const progressBar = document.getElementById('routingProgressBar');
    
    // Show modal
    modal.classList.add('active');
    
    const steps = [
        { id: 'step1', duration: 3000, text: 'Analyzing case complexity...' },
        { id: 'step2', duration: 3000, text: 'Scanning adjuster database...' },
        { id: 'step3', duration: 3000, text: 'Calculating match scores...' },
        { id: 'step4', duration: 3000, text: 'Finalizing assignment...' }
    ];
    
    let totalProgress = 0;
    const progressIncrement = 100 / steps.length;
    
    for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        const stepElement = document.getElementById(step.id);
        
        // Activate current step
        stepElement.classList.add('active');
        
        // Update progress bar
        totalProgress += progressIncrement;
        progressBar.style.width = totalProgress + '%';
        
        // Wait for step duration
        await this.delay(step.duration);
        
        // Mark as complete
        stepElement.classList.remove('active');
        stepElement.classList.add('complete');
        stepElement.querySelector('.step-icon').innerHTML = '✓';
    }
    
    // Final progress completion
    progressBar.style.width = '100%';
    
    // Wait a moment then hide modal
    await this.delay(800);
    modal.classList.remove('active');
    
    // Reset modal for next use
    setTimeout(() => {
        steps.forEach(step => {
            const stepElement = document.getElementById(step.id);
            stepElement.classList.remove('active', 'complete');
            stepElement.querySelector('.step-icon').innerHTML = stepElement.querySelector('.step-icon').textContent.replace('✓', '1234'[steps.indexOf(step)]);
        });
        progressBar.style.width = '0%';
    }, 300);
}

    async runPart3() {
        console.log('Starting Part 3 - Pattern Analysis');
        
        if (this.isProcessing) return;
        
        this.isProcessing = true;
        this.updateRibbonButton('btn-part3', 'processing', 'Processing...');
        
        await this.delay(3500);
        
        this.createPatternAnalysisCard();
        this.completePart(3);
        this.enablePart(4);
        
        this.isProcessing = false;
        console.log('Part 3 completed');
    }

    async runPart4() {
        console.log('Starting Part 4 - Reserve Calculation');
        
        if (this.isProcessing) return;
        
        this.isProcessing = true;
        this.updateRibbonButton('btn-part4', 'processing', 'Processing...');
        
        await this.delay(3000);
        
        this.createReserveAnalysisCard();
        this.completePart(4);
        
        // Show reset button
        const resetBtn = document.getElementById('resetDemo');
        if (resetBtn) {
            resetBtn.style.display = 'flex';
        }
        
        this.isProcessing = false;
        console.log('Part 4 completed - All processing finished!');
    }

    createDocumentAnalysisCard() {
        const card = {
            id: 'analysis',
            title: 'Document Analysis Complete',
            content: `
                <div class="analysis-grid">
                    <div class="analysis-item">
                        <div class="analysis-label">Complexity Score</div>
                        <div class="analysis-value critical">9.1/10</div>
                    </div>
                    <div class="analysis-item">
                        <div class="analysis-label">Documents Processed</div>
                        <div class="analysis-value">4 Complete</div>
                    </div>
                    <div class="analysis-item">
                        <div class="analysis-label">Risk Assessment</div>
                        <div class="analysis-value critical">Critical</div>
                    </div>
                    <div class="analysis-item">
                        <div class="analysis-label">Special Handling</div>
                        <div class="analysis-value">Required</div>
                    </div>
                </div>
                
                <table class="professional-table">
                    <thead>
                        <tr>
                            <th>Complexity Factor</th>
                            <th>Assessment</th>
                            <th>Impact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Minor Involvement</strong></td>
                            <td>Sofia Martinez (8 years) - Facial lacerations requiring plastic surgery</td>
                            <td>Growth-related revision surgeries through age 18</td>
                        </tr>
                        <tr>
                            <td><strong>Elderly Unconscious</strong></td>
                            <td>Roberto Martinez (69 years) - Diabetic, unconscious at scene</td>
                            <td>Cardiac complications probable within 60 days</td>
                        </tr>
                        <tr>
                            <td><strong>High-Speed Impact</strong></td>
                            <td>55mph collision in 35mph zone - Severe mechanism</td>
                            <td>Extensive injuries and property damage</td>
                        </tr>
                        <tr>
                            <td><strong>Family Unit</strong></td>
                            <td>Multi-generational trauma across 3 family members</td>
                            <td>Complexity multipliers and emotional factors active</td>
                        </tr>
                    </tbody>
                </table>
            `
        };
        
        this.addResultCard(card);
    }

    createRoutingCard() {
        const card = {
            id: 'routing',
            title: 'Intelligent Routing Complete',
            content: `
                <div class="analysis-grid">
                    <div class="analysis-item">
                        <div class="analysis-label">Assigned Adjuster</div>
                        <div class="analysis-value success">Jennifer Torres</div>
                    </div>
                    <div class="analysis-item">
                        <div class="analysis-label">Match Score</div>
                        <div class="analysis-value success">9.6/10</div>
                    </div>
                    <div class="analysis-item">
                        <div class="analysis-label">Specialization</div>
                        <div class="analysis-value">Senior BI + Minor</div>
                    </div>
                    <div class="analysis-item">
                        <div class="analysis-label">Experience</div>
                        <div class="analysis-value">15 Years</div>
                    </div>
                </div>
                
                <table class="professional-table">
                    <thead>
                        <tr>
                            <th>Qualification Requirement</th>
                            <th>Jennifer Torres Status</th>
                            <th>Rationale</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Minor Certification</strong></td>
                            <td style="color: var(--cc-success);">✓ Certified</td>
                            <td>Required for Sofia Martinez (age 8) handling</td>
                        </tr>
                        <tr>
                            <td><strong>Facial Trauma Expertise</strong></td>
                            <td style="color: var(--cc-success);">✓ Expert Level</td>
                            <td>Plastic surgery coordination and revision planning</td>
                        </tr>
                        <tr>
                            <td><strong>Family Dynamics Experience</strong></td>
                            <td style="color: var(--cc-success);">✓ Extensive</td>
                            <td>Multi-generational claims management background</td>
                        </tr>
                        <tr>
                            <td><strong>Medical Complexity Handling</strong></td>
                            <td style="color: var(--cc-success);">✓ Advanced</td>
                            <td>Elderly diabetic complications and cardiac monitoring</td>
                        </tr>
                        <tr>
                            <td><strong>Current Availability</strong></td>
                            <td style="color: var(--cc-success);">✓ Available</td>
                            <td>Immediate assignment with optimal caseload</td>
                        </tr>
                    </tbody>
                </table>
            `
        };
        
        this.addResultCard(card);
    }

    createPatternAnalysisCard() {
        const card = {
            id: 'patterns',
            title: 'Historical Pattern Analysis Complete',
            content: `
                <div class="analysis-grid">
                    <div class="analysis-item">
                        <div class="analysis-label">Similar Cases</div>
                        <div class="analysis-value">3 High Matches</div>
                    </div>
                    <div class="analysis-item">
                        <div class="analysis-label">Expected Range</div>
                        <div class="analysis-value">$380K - $950K</div>
                    </div>
                    <div class="analysis-item">
                        <div class="analysis-label">Timeline Forecast</div>
                        <div class="analysis-value">18-24 Months</div>
                    </div>
                    <div class="analysis-item">
                        <div class="analysis-label">Pattern Confidence</div>
                        <div class="analysis-value success">87%</div>
                    </div>
                </div>
                
                <table class="professional-table">
                    <thead>
                        <tr>
                            <th>Historical Case Reference</th>
                            <th>Similarity Score</th>
                            <th>Final Settlement</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2023 Minor-facial-elderly-family</td>
                            <td>94%</td>
                            <td><strong>$890,000</strong></td>
                            <td>22 months</td>
                        </tr>
                        <tr>
                            <td>2024 Unconscious-elderly-diabetic</td>
                            <td>89%</td>
                            <td><strong>$340,000</strong></td>
                            <td>16 months</td>
                        </tr>
                        <tr>
                            <td>2022 Facial-scarring-minor</td>
                            <td>86%</td>
                            <td><strong>$485,000</strong></td>
                            <td>19 months</td>
                        </tr>
                    </tbody>
                </table>
                
                <table class="professional-table" style="margin-top: 16px;">
                    <thead>
                        <tr>
                            <th>Predictive Factor</th>
                            <th>Probability</th>
                            <th>Historical Basis</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Multiple reserve increases</td>
                            <td><strong>91%</strong></td>
                            <td>47 of 52 similar cases</td>
                        </tr>
                        <tr>
                            <td>Legal representation within 90 days</td>
                            <td><strong>76%</strong></td>
                            <td>39 of 52 similar cases</td>
                        </tr>
                        <tr>
                            <td>Plastic surgery requirements</td>
                            <td><strong>88%</strong></td>
                            <td>23 of 26 minor facial trauma cases</td>
                        </tr>
                        <tr>
                            <td>Cardiac complications (elderly diabetic)</td>
                            <td><strong>65%</strong></td>
                            <td>17 of 26 unconscious diabetic cases</td>
                        </tr>
                    </tbody>
                </table>
            `
        };
        
        this.addResultCard(card);
    }

    createReserveAnalysisCard() {
        const card = {
            id: 'reserves',
            title: 'Reserve Intelligence Analysis Complete',
            content: `
                <div class="analysis-grid">
                    <div class="analysis-item">
                        <div class="analysis-label">Traditional Method</div>
                        <div class="analysis-value critical">$115,000</div>
                    </div>
                    <div class="analysis-item">
                        <div class="analysis-label">AI-Enhanced Reserve</div>
                        <div class="analysis-value success">$612,500</div>
                    </div>
                    <div class="analysis-item">
                        <div class="analysis-label">Accuracy Improvement</div>
                        <div class="analysis-value success">432%</div>
                    </div>
                    <div class="analysis-item">
                        <div class="analysis-label">Confidence Level</div>
                        <div class="analysis-value">84%</div>
                    </div>
                </div>
                
                <table class="professional-table">
                    <thead>
                        <tr>
                            <th>Claimant</th>
                            <th>Base Assessment</th>
                            <th>Complexity Multiplier</th>
                            <th>Adjusted Reserve</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Roberto Martinez (69)</strong></td>
                            <td>$30,000</td>
                            <td>2.8x (elderly/unconscious/diabetic)</td>
                            <td><strong>$84,000</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Maria Martinez (67)</strong></td>
                            <td>$15,000</td>
                            <td>1.9x (elderly trauma)</td>
                            <td><strong>$28,500</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Sofia Martinez (8)</strong></td>
                            <td>$25,000</td>
                            <td>6.2x (facial trauma/growth factor)</td>
                            <td><strong>$155,000</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Future surgical procedures</strong></td>
                            <td colspan="2">Revision surgeries through age 18</td>
                            <td><strong>$95,000</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Pain & suffering</strong></td>
                            <td colspan="2">Family unit trauma multiplier</td>
                            <td><strong>$180,000</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Legal & administrative costs</strong></td>
                            <td colspan="2">Expected attorney involvement</td>
                            <td><strong>$70,000</strong></td>
                        </tr>
                        <tr style="background: rgba(40, 167, 69, 0.1); font-weight: 600;">
                            <td><strong>TOTAL AI-ENHANCED RESERVE</strong></td>
                            <td colspan="3"><strong>$612,500</strong></td>
                        </tr>
                    </tbody>
                </table>
                
                <div style="background: var(--cc-off-white); padding: 12px; border-radius: var(--cc-border-radius); margin-top: 12px; font-size: var(--cc-font-size-xs);">
                    <strong>Key Intelligence:</strong> Traditional reserving would have created a $497,500 shortfall, requiring significant earnings adjustments. 
                    AI-enhanced analysis identified critical complexity factors early, preventing financial surprise while ensuring optimal care pathway for the Martinez family.
                    <br><br>
                    <strong>Monitoring Triggers:</strong> Automatic reserve reviews scheduled for days 7, 21, 45, 90, and 180.
                </div>
            `
        };
        
        this.addResultCard(card);
    }

    addResultCard(card) {
        this.resultCards.push(card);
        this.showResultCard(this.resultCards.length - 1);
    }

    showResultCard(index) {
        const resultsArea = document.getElementById('resultsArea');
        if (!resultsArea) {
            console.error('Results area not found!');
            return;
        }
        
        const card = this.resultCards[index];
        
        resultsArea.innerHTML = `
            <div class="result-card active">
                <div class="result-card-header">
                    <div class="card-title">${card.title}</div>
                    <div class="card-navigation">
                        <button class="nav-btn" ${index === 0 ? 'disabled' : ''} onclick="demo.showResultCard(${index - 1})">← Previous</button>
                        <div class="card-indicator">${index + 1} of ${this.resultCards.length}</div>
                        <button class="nav-btn" ${index === this.resultCards.length - 1 ? 'disabled' : ''} onclick="demo.showResultCard(${index + 1})">Next →</button>
                    </div>
                </div>
                ${card.content}
            </div>
        `;
        
        this.currentResultCard = index;
    }

    updateRibbonButton(id, state, text) {
        const btn = document.getElementById(id);
        const statusElement = document.getElementById(id.replace('btn-', 'ribbon-status-'));
        
        if (btn) {
            btn.className = `action-btn ${state}`;
            if (state === 'processing') {
                btn.disabled = true;
            }
        }
        
        if (statusElement) {
            statusElement.textContent = text;
        }
    }

    completePart(partNumber) {
        this.completedParts.push(partNumber);
        this.updateRibbonButton(`btn-part${partNumber}`, 'complete', 'Complete');
    }

    enablePart(partNumber) {
        const btn = document.getElementById(`btn-part${partNumber}`);
        if (btn) {
            btn.disabled = false;
        }
    }

    resetDemo() {
        console.log('Resetting demo...');
        
        this.isProcessing = false;
        this.completedParts = [];
        this.currentResultCard = 0;
        this.resultCards = [];
        
        // Reset ribbon buttons
        for (let i = 1; i <= 4; i++) {
            const btn = document.getElementById(`btn-part${i}`);
            const statusElement = document.getElementById(`ribbon-status-${i}`);
            
            if (btn) {
                btn.className = i === 1 ? 'action-btn primary' : 'action-btn';
                btn.disabled = i > 1;
            }
            
            if (statusElement) {
                const texts = ['Ready', 'Waiting', 'Waiting', 'Waiting'];
                statusElement.textContent = texts[i - 1];
            }
        }
        
        // Reset document table
        this.documents.forEach(doc => {
            const row = document.getElementById(`row-${doc.id}`);
            const statusIndicator = document.getElementById(`status-${doc.id}`);
            const tagsCell = document.getElementById(`tags-${doc.id}`);
            
            if (row) {
                row.className = '';
            }
            
            if (statusIndicator) {
                statusIndicator.className = 'status-indicator pending';
                statusIndicator.innerHTML = '';
            }
            
            if (tagsCell) {
                const aiTagsContainer = tagsCell.querySelector('.ai-tags');
                if (aiTagsContainer) {
                    aiTagsContainer.innerHTML = '';
                }
            }
        });
        
        // Reset results area
        const resultsArea = document.getElementById('resultsArea');
        if (resultsArea) {
            resultsArea.innerHTML = `
                <div class="results-placeholder">
                    <div class="placeholder-text">AI Analysis Results</div>
                    <div class="placeholder-sub">Click "Process Documents" to begin analysis</div>
                </div>
            `;
        }
        
        // Hide reset button
        const resetBtn = document.getElementById('resetDemo');
        if (resetBtn) {
            resetBtn.style.display = 'none';
        }
        
        console.log('Demo reset complete');
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize demo - create global variable for navigation
let demo;

// Multiple initialization attempts to ensure it works
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        demo = new EnterpriseClaimsDemo();
    });
} else {
    demo = new EnterpriseClaimsDemo();
}

// Backup initialization
window.addEventListener('load', () => {
    if (!demo) {
        demo = new EnterpriseClaimsDemo();
    }
});

console.log('AI Claims Processing Demo script loaded');
