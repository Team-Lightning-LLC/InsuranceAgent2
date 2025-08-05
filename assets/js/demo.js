/**
 * AI Claims Processing Demo - Enhanced ClaimCenter Style
 * Professional interface with large results area and sidebar controls
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
                fileName: 'Martinez_FNOL_Intake.pdf',
                type: 'Initial Report',
                insights: 'Multi-generational family, elderly driver unconscious, minor with facial trauma',
                findings: ['Family dynamics', 'Age-related risks', 'Minor involvement', 'Specialized protocols']
            },
            {
                id: 'police',
                title: 'Police Incident Report',
                fileName: 'Martinez_Police_Report.pdf',
                type: 'Official Documentation',
                insights: 'High-speed T-bone collision, clear liability, DUI suspicion, extensive damage',
                findings: ['Speed factor', 'Clear liability', 'Criminal element', 'Property damage']
            },
            {
                id: 'medical',
                title: 'Medical Records',
                fileName: 'Martinez_Medical_Records.pdf',
                type: 'Treatment Documentation',
                insights: 'Unconscious elderly diabetic, facial lacerations requiring surgery, trauma',
                findings: ['Diabetic complications', 'Surgical requirements', 'Growth concerns', 'Age factors']
            },
            {
                id: 'photos',
                title: 'Damage Assessment Photos',
                fileName: 'Martinez_Damage_Photos.zip',
                type: 'Visual Evidence',
                insights: 'Tesla Model S extensive damage, glass fragmentation, airbag deployment',
                findings: ['High repair costs', 'Impact analysis', 'Safety systems', 'Total loss likely']
            }
        ];
        
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('btn-part1').addEventListener('click', () => this.runPart1());
        document.getElementById('btn-part2').addEventListener('click', () => this.runPart2());
        document.getElementById('btn-part3').addEventListener('click', () => this.runPart3());
        document.getElementById('btn-part4').addEventListener('click', () => this.runPart4());
        document.getElementById('resetDemo').addEventListener('click', () => this.resetDemo());
        
        // Result navigation
        document.getElementById('prevResult').addEventListener('click', () => this.showPreviousResult());
        document.getElementById('nextResult').addEventListener('click', () => this.showNextResult());
    }

    async runPart1() {
        if (this.isProcessing) return;
        
        this.isProcessing = true;
        this.updateButton('btn-part1', 'processing', 'Processing Documents...');
        
        // Process documents individually
        for (let i = 0; i < this.documents.length; i++) {
            await this.processDocument(this.documents[i], i * 800);
        }
        
        await this.delay(1000);
        
        // Create and show analysis card
        this.createDocumentAnalysisCard();
        
        // Complete part 1
        this.completePart(1);
        this.enablePart(2);
        
        this.isProcessing = false;
    }

    async processDocument(doc, delay) {
        await this.delay(delay);
        
        const fileItem = document.getElementById(`file-${doc.id}`);
        const statusElement = document.getElementById(`status-${doc.id}`);
        const indicatorElement = document.getElementById(`indicator-${doc.id}`);
        
        // Start processing
        fileItem.className = 'doc-item clickable processing';
        statusElement.textContent = 'Processing...';
        statusElement.style.color = 'var(--gw-processing)';
        
        await this.delay(1500);
        
        // Complete processing
        fileItem.className = 'doc-item clickable complete';
        statusElement.textContent = 'Complete';
        statusElement.style.color = 'var(--gw-success)';
    }

    async runPart2() {
        if (this.isProcessing) return;
        
        this.isProcessing = true;
        this.updateButton('btn-part2', 'processing', 'Processing Routing...');
        
        await this.delay(2500);
        
        this.createRoutingCard();
        this.completePart(2);
        this.enablePart(3);
        
        this.isProcessing = false;
    }

    async runPart3() {
        if (this.isProcessing) return;
        
        this.isProcessing = true;
        this.updateButton('btn-part3', 'processing', 'Analyzing Patterns...');
        
        await this.delay(3500);
        
        this.createPatternAnalysisCard();
        this.completePart(3);
        this.enablePart(4);
        
        this.isProcessing = false;
    }

    async runPart4() {
        if (this.isProcessing) return;
        
        this.isProcessing = true;
        this.updateButton('btn-part4', 'processing', 'Calculating Reserves...');
        
        await this.delay(3000);
        
        this.createReserveAnalysisCard();
        this.completePart(4);
        
        // Show reset button
        document.getElementById('resetDemo').style.display = 'block';
        
        this.isProcessing = false;
    }

    createDocumentAnalysisCard() {
        const card = {
            id: 'analysis',
            title: 'Document Analysis Results',
            tabLabel: 'Document Analysis',
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
            title: 'Intelligent Routing Results',
            tabLabel: 'Routing Analysis',
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
                            <td style="color: var(--gw-success);">✓ Certified</td>
                            <td>Required for Sofia Martinez (age 8) handling</td>
                        </tr>
                        <tr>
                            <td><strong>Facial Trauma Expertise</strong></td>
                            <td style="color: var(--gw-success);">✓ Expert Level</td>
                            <td>Plastic surgery coordination and revision planning</td>
                        </tr>
                        <tr>
                            <td><strong>Family Dynamics Experience</strong></td>
                            <td style="color: var(--gw-success);">✓ Extensive</td>
                            <td>Multi-generational claims management background</td>
                        </tr>
                        <tr>
                            <td><strong>Medical Complexity Handling</strong></td>
                            <td style="color: var(--gw-success);">✓ Advanced</td>
                            <td>Elderly diabetic complications and cardiac monitoring</td>
                        </tr>
                        <tr>
                            <td><strong>Current Availability</strong></td>
                            <td style="color: var(--gw-success);">✓ Available</td>
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
            title: 'Historical Pattern Analysis Results',
            tabLabel: 'Pattern Analysis',
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
                
                <table class="professional-table" style="margin-top: 20px;">
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
            title: 'Reserve Intelligence Analysis Results',
            tabLabel: 'Reserve Intelligence',
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
                
                <div style="background: var(--gw-off-white); padding: 16px; border-radius: var(--border-radius); margin-top: 16px; border-left: 4px solid var(--gw-blue-dark);">
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
        this.updateNavigation();
    }

    showResultCard(index) {
        const resultsDisplay = document.getElementById('resultsDisplay');
        const card = this.resultCards[index];
        
        resultsDisplay.innerHTML = `
            <div class="result-card active">
                ${card.content}
            </div>
        `;
        
        this.currentResultCard = index;
        this.updateNavigation();
    }

    updateNavigation() {
        const navigation = document.getElementById('resultsNavigation');
        const tabs = document.getElementById('resultTabs');
        const prevBtn = document.getElementById('prevResult');
        const nextBtn = document.getElementById('nextResult');
        
        if (this.resultCards.length > 0) {
            navigation.style.display = 'flex';
            
            // Update tabs
            tabs.innerHTML = this.resultCards.map((card, index) => 
                `<button class="result-tab ${index === this.currentResultCard ? 'active' : ''}" 
                         onclick="demo.showResultCard(${index})">${card.tabLabel}</button>`
            ).join('');
            
            // Update buttons
            prevBtn.disabled = this.currentResultCard === 0;
            nextBtn.disabled = this.currentResultCard === this.resultCards.length - 1;
        } else {
            navigation.style.display = 'none';
        }
    }

    showPreviousResult() {
        if (this.currentResultCard > 0) {
            this.showResultCard(this.currentResultCard - 1);
        }
    }

    showNextResult() {
        if (this.currentResultCard < this.resultCards.length - 1) {
            this.showResultCard(this.currentResultCard + 1);
        }
    }

    updateButton(id, state, text) {
        const btn = document.getElementById(id);
        const statusElement = document.getElementById(id.replace('btn-', 'btn-status-'));
        
        btn.className = `process-btn ${state}`;
        
        if (state === 'processing') {
            btn.disabled = true;
            statusElement.textContent = 'Processing...';
        } else if (state === 'complete') {
            statusElement.textContent = 'Complete';
        }
    }

    completePart(partNumber) {
        this.completedParts.push(partNumber);
        this.updateButton(`btn-part${partNumber}`, 'complete', 'Complete');
    }

    enablePart(partNumber) {
        const btn = document.getElementById(`btn-part${partNumber}`);
        const statusElement = document.getElementById(`btn-status-${partNumber}`);
        btn.disabled = false;
        statusElement.textContent = 'Ready';
    }

    resetDemo() {
        this.isProcessing = false;
        this.completedParts = [];
        this.currentResultCard = 0;
        this.resultCards = [];
        
        // Reset all buttons
        for (let i = 1; i <= 4; i++) {
            const btn = document.getElementById(`btn-part${i}`);
            const statusElement = document.getElementById(`btn-status-${i}`);
            
            btn.className = 'process-btn';
            btn.disabled = i > 1;
            statusElement.textContent = i === 1 ? 'Ready' : 'Waiting';
        }
        
        // Reset documents
        this.documents.forEach(doc => {
            const fileItem = document.getElementById(`file-${doc.id}`);
            const statusElement = document.getElementById(`status-${doc.id}`);
            
            fileItem.className = 'doc-item clickable';
            statusElement.textContent = 'Ready';
            statusElement.style.color = '';
        });
        
        // Reset results area
        const resultsDisplay = document.getElementById('resultsDisplay');
        resultsDisplay.innerHTML = `
            <div class="results-placeholder">
                <div class="placeholder-icon">🤖</div>
                <div class="placeholder-text">AI Analysis Ready</div>
                <div class="placeholder-sub">Click "Process Documents" to begin intelligent analysis</div>
            </div>
        `;
        
        // Hide navigation and reset button
        document.getElementById('resultsNavigation').style.display = 'none';
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
