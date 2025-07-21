/**
 * AI Claims Processing Demo - Enterprise ClaimCenter Style
 * Manual 4-part processing with professional result cards
 */

class EnterpriseClaimsDemo {
    constructor() {
        this.completedParts = [];
        this.isProcessing = false;
        this.currentResultCard = 0;
        this.resultCards = [];
        
        this.documents = [
            {
                id: 'fnol',
                title: 'FNOL Intake Form',
                type: 'Initial Report',
                insights: 'Multi-generational family involvement, elderly driver unconscious, minor with facial trauma requiring specialized handling',
                findings: ['Family dynamics', 'Age-related risks', 'Minor involvement', 'Specialized protocols']
            },
            {
                id: 'police',
                title: 'Police Incident Report',
                type: 'Official Documentation',
                insights: 'High-speed T-bone collision at 55mph, clear liability determination, DUI suspicion pending toxicology, extensive property damage',
                findings: ['Speed factor', 'Clear liability', 'Criminal element', 'Property damage']
            },
            {
                id: 'medical',
                title: 'Medical Records',
                type: 'Treatment Documentation',
                insights: 'Unconscious elderly diabetic driver, minor facial lacerations requiring plastic surgery, neck and back trauma in elderly passenger',
                findings: ['Diabetic complications', 'Surgical requirements', 'Growth concerns', 'Age-related factors']
            },
            {
                id: 'photos',
                title: 'Damage Assessment Photos',
                type: 'Visual Evidence',
                insights: 'Tesla Model S extensive structural damage, glass fragmentation pattern consistent with high-speed impact, airbag deployment successful',
                findings: ['High repair costs', 'Impact analysis', 'Safety systems', 'Total loss likely']
            }
        ];
        
        this.init();
    }

    init() {
        this.setupDocuments();
        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('btn-part1').addEventListener('click', () => this.runPart1());
        document.getElementById('btn-part2').addEventListener('click', () => this.runPart2());
        document.getElementById('btn-part3').addEventListener('click', () => this.runPart3());
        document.getElementById('btn-part4').addEventListener('click', () => this.runPart4());
        document.getElementById('resetDemo').addEventListener('click', () => this.resetDemo());
    }

    setupDocuments() {
        const grid = document.getElementById('documentGrid');
        
        this.documents.forEach(doc => {
            const card = document.createElement('div');
            card.className = 'document-card';
            card.id = `doc-${doc.id}`;
            
            card.innerHTML = `
                <div class="document-header">
                    <div class="document-title">${doc.title}</div>
                </div>
                <div class="document-type">${doc.type}</div>
                <div class="document-insights">${doc.insights}</div>
                <div class="document-findings" id="findings-${doc.id}"></div>
            `;
            
            grid.appendChild(card);
        });
    }

    async runPart1() {
        if (this.isProcessing) return;
        
        this.isProcessing = true;
        this.updateButton('btn-part1', 'processing', '⏳ Processing...');
        this.updateSectionStatus('section-1', 'active');
        this.updateQueueStatus(1, 'active');
        
        // Process documents individually
        for (let i = 0; i < this.documents.length; i++) {
            await this.processDocument(this.documents[i], i * 1000);
        }
        
        await this.delay(1000);
        
        // Create and show enterprise result card
        this.createDocumentAnalysisCard();
        
        // Complete part 1
        this.completePart(1);
        this.enablePart(2);
        
        this.isProcessing = false;
    }

    async processDocument(doc, delay) {
        await this.delay(delay);
        
        const card = document.getElementById(`doc-${doc.id}`);
        const findingsElement = document.getElementById(`findings-${doc.id}`);
        const sidebarItem = document.querySelector(`[data-doc="${doc.id}"]`);
        const sidebarStatus = document.getElementById(`sidebar-${doc.id}`);
        
        // Start processing
        card.className = 'document-card processing';
        if (sidebarItem) sidebarItem.className = 'doc-item processing';
        if (sidebarStatus) sidebarStatus.textContent = 'Analyzing...';
        
        await this.delay(2000);
        
        // Show findings
        const findingsHTML = doc.findings.map(finding => 
            `<span class="finding-tag high">${finding}</span>`
        ).join('');
        findingsElement.innerHTML = findingsHTML;
        
        // Complete processing
        card.className = 'document-card complete';
        if (sidebarItem) sidebarItem.className = 'doc-item complete';
        if (sidebarStatus) sidebarStatus.textContent = 'Complete ✓';
    }

    createDocumentAnalysisCard() {
        const card = {
            id: 'analysis',
            title: '📊 Document Analysis Results',
            content: `
                <div class="data-grid">
                    <div class="data-item">
                        <div class="data-label">Complexity Score</div>
                        <div class="data-value critical">9.1/10 CRITICAL</div>
                    </div>
                    <div class="data-item">
                        <div class="data-label">Documents Processed</div>
                        <div class="data-value">4 of 4 Complete</div>
                    </div>
                    <div class="data-item">
                        <div class="data-label">Risk Level</div>
                        <div class="data-value critical">High</div>
                    </div>
                    <div class="data-item">
                        <div class="data-label">Special Handling</div>
                        <div class="data-value">Minor + Elderly Required</div>
                    </div>
                </div>
                
                <table class="enterprise-table">
                    <thead>
                        <tr>
                            <th>Complexity Factor</th>
                            <th>Assessment</th>
                            <th>Impact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Minor Involvement (8-year-old Sofia)</td>
                            <td>Facial lacerations requiring plastic surgery</td>
                            <td>Growth-related revision surgeries likely</td>
                        </tr>
                        <tr>
                            <td>Elderly Unconscious (69-year-old Roberto)</td>
                            <td>Diabetic, unconscious at scene</td>
                            <td>Cardiac complications probable</td>
                        </tr>
                        <tr>
                            <td>High-Speed Impact</td>
                            <td>55mph in 35mph zone</td>
                            <td>Severe injury mechanism</td>
                        </tr>
                        <tr>
                            <td>Family Unit Dynamics</td>
                            <td>Multi-generational trauma</td>
                            <td>Complexity multipliers active</td>
                        </tr>
                    </tbody>
                </table>
            `
        };
        
        this.addResultCard(card);
    }

    async runPart2() {
        if (this.isProcessing) return;
        
        this.isProcessing = true;
        this.updateButton('btn-part2', 'processing', '⏳ Processing...');
        this.updateSectionStatus('section-2', 'active');
        this.updateQueueStatus(2, 'active');
        
        await this.delay(2500);
        
        this.createRoutingCard();
        this.completePart(2);
        this.enablePart(3);
        
        this.isProcessing = false;
    }

    createRoutingCard() {
        const card = {
            id: 'routing',
            title: '👤 Intelligent Routing Results',
            content: `
                <div class="data-grid">
                    <div class="data-item">
                        <div class="data-label">Assigned Adjuster</div>
                        <div class="data-value success">Jennifer Torres</div>
                    </div>
                    <div class="data-item">
                        <div class="data-label">Match Score</div>
                        <div class="data-value success">9.6/10 Optimal</div>
                    </div>
                    <div class="data-item">
                        <div class="data-label">Specialization</div>
                        <div class="data-value">Senior BI + Minor Specialist</div>
                    </div>
                    <div class="data-item">
                        <div class="data-label">Experience</div>
                        <div class="data-value">15 Years</div>
                    </div>
                </div>
                
                <table class="enterprise-table">
                    <thead>
                        <tr>
                            <th>Qualification</th>
                            <th>Requirement</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Minor Certification</td>
                            <td>Required for Sofia (age 8)</td>
                            <td><span style="color: var(--cc-success);">✓ Qualified</span></td>
                        </tr>
                        <tr>
                            <td>Facial Trauma Expertise</td>
                            <td>Plastic surgery coordination</td>
                            <td><span style="color: var(--cc-success);">✓ High Experience</span></td>
                        </tr>
                        <tr>
                            <td>Family Dynamics</td>
                            <td>Multi-generational claims</td>
                            <td><span style="color: var(--cc-success);">✓ Extensive Background</span></td>
                        </tr>
                        <tr>
                            <td>Medical Complexity</td>
                            <td>Elderly diabetic complications</td>
                            <td><span style="color: var(--cc-success);">✓ Advanced Training</span></td>
                        </tr>
                        <tr>
                            <td>Current Capacity</td>
                            <td>Immediate availability</td>
                            <td><span style="color: var(--cc-success);">✓ Available</span></td>
                        </tr>
                    </tbody>
                </table>
                
                <div style="background: var(--cc-off-white); padding: 16px; border-radius: var(--cc-border-radius); margin-top: 16px;">
                    <strong>Case Brief for Jennifer Torres:</strong><br>
                    <em>"PRIORITY: Martinez family T-bone collision. 8-year-old Sofia facial lacerations requiring plastic surgery consultation. 69-year-old Roberto unconscious/diabetic - monitor for cardiac complications. 67-year-old Maria neck/back trauma. Expect family attorney involvement within 90 days. Document minor consent procedures immediately."</em>
                </div>
            `
        };
        
        this.addResultCard(card);
    }

    async runPart3() {
        if (this.isProcessing) return;
        
        this.isProcessing = true;
        this.updateButton('btn-part3', 'processing', '⏳ Processing...');
        this.updateSectionStatus('section-3', 'active');
        this.updateQueueStatus(3, 'active');
        
        await this.delay(4000);
        
        this.createPatternAnalysisCard();
        this.completePart(3);
        this.enablePart(4);
        
        this.isProcessing = false;
    }

    createPatternAnalysisCard() {
        const card = {
            id: 'patterns',
            title: '🔍 Historical Pattern Analysis',
            content: `
                <div class="data-grid">
                    <div class="data-item">
                        <div class="data-label">Similar Cases Found</div>
                        <div class="data-value">3 High-Confidence Matches</div>
                    </div>
                    <div class="data-item">
                        <div class="data-label">Expected Range</div>
                        <div class="data-value">$380K - $950K</div>
                    </div>
                    <div class="data-item">
                        <div class="data-label">Timeline Prediction</div>
                        <div class="data-value">18-24 Months</div>
                    </div>
                    <div class="data-item">
                        <div class="data-label">Pattern Confidence</div>
                        <div class="data-value success">87%</div>
                    </div>
                </div>
                
                <table class="enterprise-table">
                    <thead>
                        <tr>
                            <th>Historical Case</th>
                            <th>Similarity Score</th>
                            <th>Final Payout</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2023 Minor-facial-elderly-family</td>
                            <td>94%</td>
                            <td>$890,000</td>
                            <td>22 months</td>
                        </tr>
                        <tr>
                            <td>2024 Unconscious-elderly-diabetic</td>
                            <td>89%</td>
                            <td>$340,000</td>
                            <td>16 months</td>
                        </tr>
                        <tr>
                            <td>2022 Facial-scarring-minor</td>
                            <td>86%</td>
                            <td>$485,000</td>
                            <td>19 months</td>
                        </tr>
                    </tbody>
                </table>
                
                <table class="enterprise-table" style="margin-top: 20px;">
                    <thead>
                        <tr>
                            <th>Predictive Factor</th>
                            <th>Probability</th>
                            <th>Based on Historical Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Multiple reserve increases</td>
                            <td>91%</td>
                            <td>47 of 52 similar cases</td>
                        </tr>
                        <tr>
                            <td>Legal representation within 90 days</td>
                            <td>76%</td>
                            <td>39 of 52 similar cases</td>
                        </tr>
                        <tr>
                            <td>Plastic surgery requirements</td>
                            <td>88%</td>
                            <td>23 of 26 minor facial trauma cases</td>
                        </tr>
                        <tr>
                            <td>Cardiac complications (elderly diabetic)</td>
                            <td>65%</td>
                            <td>17 of 26 unconscious diabetic cases</td>
                        </tr>
                    </tbody>
                </table>
            `
        };
        
        this.addResultCard(card);
    }

    async runPart4() {
        if (this.isProcessing) return;
        
        this.isProcessing = true;
        this.updateButton('btn-part4', 'processing', '⏳ Processing...');
        this.updateSectionStatus('section-4', 'active');
        this.updateQueueStatus(4, 'active');
        
        await this.delay(3000);
        
        this.createReserveAnalysisCard();
        this.completePart(4);
        
        // Show reset button since all parts are complete
        document.getElementById('resetDemo').style.display = 'block';
        
        this.isProcessing = false;
    }

    createReserveAnalysisCard() {
        const card = {
            id: 'reserves',
            title: '💰 Reserve Intelligence Analysis',
            content: `
                <div class="data-grid">
                    <div class="data-item">
                        <div class="data-label">Traditional Method</div>
                        <div class="data-value critical">$115,000</div>
                    </div>
                    <div class="data-item">
                        <div class="data-label">AI-Enhanced Reserve</div>
                        <div class="data-value success">$612,500</div>
                    </div>
                    <div class="data-item">
                        <div class="data-label">Accuracy Improvement</div>
                        <div class="data-value success">432% Better</div>
                    </div>
                    <div class="data-item">
                        <div class="data-label">Confidence Level</div>
                        <div class="data-value">84%</div>
                    </div>
                </div>
                
                <table class="enterprise-table">
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
                            <td>Roberto Martinez (69, diabetic)</td>
                            <td>$30,000</td>
                            <td>2.8x (elderly/unconscious/diabetic)</td>
                            <td><strong>$84,000</strong></td>
                        </tr>
                        <tr>
                            <td>Maria Martinez (67, passenger)</td>
                            <td>$15,000</td>
                            <td>1.9x (elderly trauma)</td>
                            <td><strong>$28,500</strong></td>
                        </tr>
                        <tr>
                            <td>Sofia Martinez (8, minor)</td>
                            <td>$25,000</td>
                            <td>6.2x (facial trauma/growth factor)</td>
                            <td><strong>$155,000</strong></td>
                        </tr>
                        <tr>
                            <td>Future surgical procedures</td>
                            <td colspan="2">Revision surgeries through age 18</td>
                            <td><strong>$95,000</strong></td>
                        </tr>
                        <tr>
                            <td>Pain & suffering</td>
                            <td colspan="2">Family unit trauma multiplier</td>
                            <td><strong>$180,000</strong></td>
                        </tr>
                        <tr>
                            <td>Legal & administrative costs</td>
                            <td colspan="2">Expected attorney involvement</td>
                            <td><strong>$70,000</strong></td>
                        </tr>
                        <tr style="background: rgba(40, 167, 69, 0.1); font-weight: 600;">
                            <td><strong>TOTAL AI-ENHANCED RESERVE</strong></td>
                            <td colspan="3"><strong>$612,500</strong></td>
                        </tr>
                    </tbody>
                </table>
                
                <div style="background: var(--cc-off-white); padding: 16px; border-radius: var(--cc-border-radius); margin-top: 16px;">
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
        const card = this.resultCards[index];
        
        // Clear existing content
        resultsArea.innerHTML = `
            <div class="result-card active">
                <div class="result-card-header">
                    <div class="card-title">${card.title}</div>
                    <div class="card-navigation">
                        <button class="nav-btn" id="prevCard" ${index === 0 ? 'disabled' : ''} onclick="demo.showResultCard(${index - 1})">‹ Previous</button>
                        <div class="card-indicator">${index + 1} of ${this.resultCards.length}</div>
                        <button class="nav-btn" id="nextCard" ${index === this.resultCards.length - 1 ? 'disabled' : ''} onclick="demo.showResultCard(${index + 1})">Next ›</button>
                    </div>
                </div>
                ${card.content}
            </div>
        `;
        
        this.currentResultCard = index;
    }

    updateButton(id, state, text) {
        const btn = document.getElementById(id);
        btn.className = `process-btn ${state}`;
        btn.textContent = text;
        
        if (state === 'processing') {
            btn.disabled = true;
        }
    }

    updateSectionStatus(sectionId, status) {
        const section = document.getElementById(sectionId);
        const statusElement = document.getElementById(sectionId.replace('section-', 'status-'));
        
        section.className = `process-section ${status}`;
        statusElement.className = `section-status ${status}`;
        
        switch(status) {
            case 'active':
                statusElement.textContent = 'Processing...';
                break;
            case 'complete':
                statusElement.textContent = 'Complete ✓';
                break;
            default:
                statusElement.textContent = 'Ready';
        }
    }

    updateQueueStatus(queueNumber, status) {
        const queueItem = document.getElementById(`queue-${queueNumber}`);
        const queueStatus = document.getElementById(`queue-status-${queueNumber}`);
        
        // Remove existing classes
        queueItem.classList.remove('active', 'complete');
        
        if (status !== 'ready') {
            queueItem.classList.add(status);
        }
        
        switch(status) {
            case 'active':
                queueStatus.textContent = 'Processing...';
                break;
            case 'complete':
                queueStatus.textContent = 'Complete ✓';
                break;
            default:
                queueStatus.textContent = 'Waiting';
        }
    }

    completePart(partNumber) {
        this.completedParts.push(partNumber);
        this.updateButton(`btn-part${partNumber}`, 'complete', '✅ Complete');
        this.updateSectionStatus(`section-${partNumber}`, 'complete');
        this.updateQueueStatus(partNumber, 'complete');
    }

    enablePart(partNumber) {
        const btn = document.getElementById(`btn-part${partNumber}`);
        btn.disabled = false;
    }

    resetDemo() {
        this.isProcessing = false;
        this.completedParts = [];
        this.currentResultCard = 0;
        this.resultCards = [];
        
        // Reset all buttons
        for (let i = 1; i <= 4; i++) {
            const btn = document.getElementById(`btn-part${i}`);
            btn.className = 'process-btn';
            btn.disabled = i > 1;
            
            // Reset button text
            const texts = ['Process Documents', 'Process Routing', 'Analyze Patterns', 'Calculate Reserves'];
            btn.textContent = texts[i - 1];
            
            // Reset sections
            this.updateSectionStatus(`section-${i}`, 'ready');
            this.updateQueueStatus(i, i === 1 ? 'ready' : 'waiting');
        }
        
        // Reset documents
        this.documents.forEach(doc => {
            const card = document.getElementById(`doc-${doc.id}`);
            const findingsElement = document.getElementById(`findings-${doc.id}`);
            const sidebarItem = document.querySelector(`[data-doc="${doc.id}"]`);
            const sidebarStatus = document.getElementById(`sidebar-${doc.id}`);
            
            card.className = 'document-card';
            findingsElement.innerHTML = '';
            if (sidebarItem) sidebarItem.className = 'doc-item';
            if (sidebarStatus) sidebarStatus.textContent = 'Ready';
        });
        
        // Reset results area
        const resultsArea = document.getElementById('resultsArea');
        resultsArea.innerHTML = `
            <div class="results-placeholder">
                <div class="placeholder-icon">⏳</div>
                <div class="placeholder-text">AI Processing Results</div>
                <div class="placeholder-sub">Click "Process Documents" to begin analysis</div>
            </div>
        `;
        
        // Hide reset button
        document.getElementById('resetDemo').style.display = 'none';
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize demo
let demo;
document.addEventListener('DOMContentLoaded', () => {
    demo = new EnterpriseClaimsDemo();
});
